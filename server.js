const express = require('express');
const next = require('next');
const fileupload = require('express-fileupload');
const randomstring = require('randomstring');

const sanitizeHtml = require('sanitize-html');
const dotenv = require('dotenv');
dotenv.config();

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const bodyParser = require('body-parser');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('./models/user.js');
const House = require('./models/house.js');
const Review = require('./models/review.js');
const Booking = require('./models/booking.js');

User.sync({ alter: true });
House.sync({ alter: true });
Review.sync({ alter: true });
Booking.sync({ alter: true });

const sequelize = require('./database.js');

const Op = require('sequelize').Op;

const sessionStore = new SequelizeStore({
  db: sequelize
});
sessionStore.sync();

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async function(email, password, done) {
      if (!email || !password) {
        done('Email and password required', null);
        return;
      }

      const user = await User.findOne({ where: { email: email } });

      if (!user) {
        done('User not found', null);
        return;
      }

      const valid = await user.isPasswordValid(password);

      if (!valid) {
        done('Email and password do not match', null);
        return;
      }
      done(null, user);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.email);
});

passport.deserializeUser((email, done) => {
  User.findOne({ where: { email: email } }).then(user => {
    console.log(user);
    done(null, user);
  });
});

nextApp.prepare().then(() => {
  const server = express();

  server.use(
    bodyParser.json({
      verify: (req, res, buf) => {
        //make rawBody available
        req.rawBody = buf;
      }
    })
  );

  server.use(
    session({
      secret: '365364dfgsdgd765634',
      resave: false,
      saveUninitialized: true,
      name: 'gamednd',
      cookie: {
        maxAge: 30 * 24 * 60 * 60 * 1000 //30 days
      },
      store: sessionStore
    }),
    passport.initialize(),
    passport.session(),
    fileupload()
  );

  server.post('/api/auth/register', async (req, res) => {
    const { email, password, passwordconfirmation } = req.body;

    if (password !== passwordconfirmation) {
      res.end(
        JSON.stringify({ status: 'error', message: 'Passwords do not match' })
      );
      return;
    }

    try {
      const user = await User.create({ email, password });

      req.login(user, err => {
        //for immediate login after user finishes registering
        if (err) {
          res.statusCode = 500;
          res.end(JSON.stringify({ status: 'error', message: err }));
          return;
        }

        return res.end(
          JSON.stringify({ status: 'success', message: 'Logged in' })
        );
      });
    } catch (error) {
      res.statusCode = 500;
      let message = 'An error occurred';
      if (error.name === 'SequelizeUniqueConstraintError') {
        message = 'User already exists';
      }
      res.end(JSON.stringify({ status: 'error', message }));
    }
  });

  server.post('/api/auth/login', async (req, res) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        res.statusCode = 500;
        res.end(
          JSON.stringify({
            status: 'error',
            message: err
          })
        );
        return;
      }
      if (!user) {
        res.statusCode = 500;
        res.end(
          JSON.stringify({
            status: 'error',
            message: 'No user matching credentials'
          })
        );
        return;
      }
      req.login(user, err => {
        if (err) {
          res.statusCode = 500;
          res.end(
            JSON.stringify({
              status: 'error',
              message: err
            })
          );
          return;
        }
        return res.end(
          JSON.stringify({
            status: 'success',
            message: 'Logged in'
          })
        );
      });
    })(req, res, next);
  });

  server.post('/api/auth/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    return res.end(
      JSON.stringify({ status: 'success', message: 'Logged Out' })
    );
  });

  server.post('/api/houses/reserve', (req, res) => {
    const userEmail = req.session.passport.user;

    User.findOne({ where: { email: userEmail } }).then(user => {
      Booking.create({
        houseId: req.body.houseId,
        userId: user.id,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        sessionId: req.body.sessionId
      }).then(() => {
        res.writeHead(200, {
          'Content-Type': 'application/json'
        });
        res.end(JSON.stringify({ status: 'success', message: 'ok' }));
      });
    });
  });

  const getDatesBetweenDates = (startDate, endDate) => {
    let dates = [];
    while (startDate < endDate) {
      dates = [...dates, new Date(startDate)];
      startDate.setDate(startDate.getDate() + 1);
    }
    dates = [...dates, endDate];
    return dates;
  };

  const canBookThoseDates = async (houseId, startDate, endDate) => {
    const results = await Booking.findAll({
      where: {
        houseId: houseId,
        startDate: {
          [Op.lte]: new Date(endDate)
        },
        endDate: {
          [Op.gte]: new Date(startDate)
        }
      }
    });
    return !(results.length > 0);
  };

  server.post('/api/houses/check', async (req, res) => {
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const houseId = req.body.houseId;

    let message = 'free';
    if (!(await canBookThoseDates(houseId, startDate, endDate))) {
      message = 'busy';
    }
    res.json({
      status: 'success',
      message: message
    });
  });

  server.post('/api/houses/booked', async (req, res) => {
    const houseId = req.body.houseId;

    const results = await Booking.findAll({
      where: {
        houseId: houseId,
        endDate: {
          [Op.gte]: new Date()
        }
      }
    });

    let bookedDates = [];

    for (const result of results) {
      const dates = getDatesBetweenDates(
        new Date(result.startDate),
        new Date(result.endDate)
      );

      bookedDates = [...bookedDates, ...dates];
    }

    //remove duplicates
    bookedDates = [...new Set(bookedDates.map(date => date))];

    res.json({
      status: 'success',
      message: 'ok',
      dates: bookedDates
    });
  });

  server.post('/api/houses/reserve', async (req, res) => {
    if (!req.session.passport) {
      res.writeHead(403, {
        'Content-Type': 'application/json'
      });
      res.end(
        JSON.stringify({
          status: 'error',
          message: 'Unauthorized'
        })
      );

      return;
    }

    if (
      !(await canBookThoseDates(
        req.body.houseId,
        req.body.startDate,
        req.body.endDate
      ))
    ) {
      //busy
      res.writeHead(500, {
        'Content-Type': 'application/json'
      });
      res.end(
        JSON.stringify({
          status: 'error',
          message: 'House is already booked'
        })
      );

      return;
    }

    const userEmail = req.session.passport.user;
    User.findOne({ where: { email: userEmail } }).then(user => {
      Booking.create({
        houseId: req.body.houseId,
        userId: user.id,
        startDate: req.body.startDate,
        endDate: req.body.endDate
      }).then(() => {
        res.writeHead(200, {
          'Content-Type': 'application/json'
        });
        res.end(JSON.stringify({ status: 'success', message: 'ok' }));
      });
    });
  });

  server.get('/api/houses/:id', (req, res) => {
    const { id } = req.params;

    House.findByPk(id).then(house => {
      if (house) {
        Review.findAndCountAll({
          where: {
            houseId: house.id
          }
        }).then(reviews => {
          house.dataValues.reviews = reviews.rows.map(
            review => review.dataValues
          );
          house.dataValues.reviewsCount = reviews.count;

          res.writeHead(200, {
            'Content-Type': 'application/json'
          });
          res.end(JSON.stringify(house.dataValues));
        });
      } else {
        res.writeHead(404, {
          'Content-Type': 'application/json'
        });
        res.end(
          JSON.stringify({
            message: 'Not Found'
          })
        );
      }
    });
  });

  server.get('/api/houses', (req, res) => {
    House.findAndCountAll().then(result => {
      const houses = result.rows.map(house => house.dataValues);

      res.writeHead(200, {
        'Content-Type': 'application/json'
      });
      res.end(JSON.stringify(houses));
    });
  });

  server.post('/api/stripe/session', async (req, res) => {
    const amount = req.body.amount;

    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          name: 'Booking event on GameDnD',
          amount: amount * 100,
          currency: 'usd',
          quantity: 1
        }
      ],
      success_url: process.env.BASE_URL + '/bookings',
      cancel_url: process.env.BASE_URL + '/bookings'
    });
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.end(
      JSON.stringify({
        status: 'success',
        sessionId: session.id,
        stripePublicKey: process.env.STRIPE_PUBLIC_KEY
      })
    );
  });

  server.post('/api/stripe/webhook', async (req, res) => {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    const endpointSecret = process.env.STRIP_WEBHOOK_SECRET;
    const sig = req.headers['strip-signature'];

    let event;

    try {
      event = stripe.webhooks.constructEvent(req.rawBody, sig, endpointSecret);
    } catch (err) {
      res.writeHead(400, {
        'Content-Type': 'application/json'
      });
      console.log(err.message);
      res.end(
        JSON.stringify({
          status: 'success',
          message: `Webhook Error: ${err.message}`
        })
      );
      return;
    }

    if (event.type === 'checkout.session.completed') {
      const sessionId = event.data.object.id;

      try {
        Booking.update({ paid: true }, { where: { sessionId } });
      } catch (err) {
        console.log(err);
      }
    }

    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.end(JSON.stringify({ received: true }));
  });

  server.post('/api/bookings/clean', (req, res) => {
    Booking.destroy({
      where: {
        paid: false
      }
    });

    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    res.end(
      JSON.stringify({
        status: 'success',
        message: 'ok'
      })
    );
  });

  server.get('/api/bookings/list', async (req, res) => {
    if (!req.session.passport || !req.session.passport.user) {
      res.writeHead(403, {
        'Content-Type': 'application/json'
      });
      res.end(
        JSON.stringify({
          status: 'error',
          message: 'Unauthorized'
        })
      );
      return;
    }

    const userEmail = req.session.passport.user;
    const user = await User.findOne({ where: { email: userEmail } });

    Booking.findAndCountAll({
      where: {
        paid: true,
        userId: user.id,
        endDate: {
          [Op.gte]: new Date()
        }
      },
      order: [['startDate', 'ASC']]
    }).then(async result => {
      const bookings = await Promise.all(
        result.rows.map(async booking => {
          const data = {};
          data.booking = booking.dataValues;
          data.house = (await House.findByPk(data.booking.houseId)).dataValues;
          return data;
        })
      );
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });
      res.end(JSON.stringify(bookings));
    });
  });

  server.get('/api/host/list', async (req, res) => {
    if (!req.session.passport || !req.session.passport.user) {
      res.writeHead(403, {
        'Content-Type': 'application/json'
      });
      res.end(
        JSON.stringify({
          status: 'error',
          message: 'Unauthorized'
        })
      );
      return;
    }

    const userEmail = req.session.passport.user;
    const user = await User.findOne({ where: { email: userEmail } });

    const houses = await House.findAll({
      where: {
        host: user.id
      }
    });

    const houseIds = houses.map(house => house.dataValues.id);

    const bookingsData = await Booking.findAll({
      where: {
        paid: true,
        houseId: {
          [Op.in]: houseIds
        },
        endDate: {
          [Op.gte]: new Date()
        }
      },
      order: [['startDate', 'ASC']]
    });

    const bookings = await Promise.all(
      bookingsData.map(async booking => {
        return {
          booking: booking.dataValues,
          house: houses.filter(
            house => house.dataValues.id === booking.dataValues.houseId
          )[0].dataValues
        };
      })
    );

    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.end(
      JSON.stringify({
        bookings,
        houses
      })
    );
  });

  server.post('/api/host/new', async (req, res) => {
    const houseData = req.body.house;

    if (!req.session.passport) {
      res.writeHead(403, {
        'Content-Type': 'application/json'
      });
      res.end(
        JSON.stringify({
          status: 'error',
          message: 'Unauthorized'
        })
      );
      return;
    }

    const userEmail = req.session.passport.user;
    User.findOne({ where: { email: userEmail } }).then(user => {
      houseData.host = user.id;
      houseData.description = sanitizeHtml(houseData.description, {
        allowedTags: ['b', 'i', 'em', 'string', 'p', 'br']
      });
      House.create(houseData).then(() => {
        res.writeHead(200, {
          'Content-Type': 'application/json'
        });
        res.end(JSON.stringify({ status: 'success', message: 'ok' }));
      });
    });
  });

  server.post('/api/host/edit', async (req, res) => {
    const houseData = req.body.house;

    if (!req.session.passport) {
      res.writeHead(403, {
        'Content-Type': 'application/json'
      });
      res.end(
        JSON.stringify({
          status: 'error',
          message: 'Unauthorized'
        })
      );
      return;
    }

    const userEmail = req.session.passport.user;
    User.findOne({ where: { email: userEmail } }).then(user => {
      House.findByPk(houseData.id).then(house => {
        if (house) {
          if (house.host !== user.id) {
            res.writeHead(403, {
              'Content-Type': 'application/json'
            });
            res.end(
              JSON.stringify({
                status: 'error',
                message: 'Unauthorized'
              })
            );

            return;
          }

          houseData.description = sanitizeHtml(houseData.description, {
            allowedTags: ['b', 'i', 'em', 'string', 'p', 'br']
          });

          House.update(houseData, {
            where: {
              id: houseData.id
            }
          })
            .then(() => {
              res.writeHead(200, {
                'Content-Type': 'application/json'
              });
              res.end(JSON.stringify({ status: 'success', message: 'ok' }));
            })
            .catch(err => {
              res.writeHead(500, {
                'Content-Type': 'application/json'
              });
              res.end(JSON.stringify({ status: 'error', message: err.name }));
            });
        } else {
          res.writeHead(404, {
            'Content-Type': 'application/json'
          });
          res.end(
            JSON.stringify({
              message: `Not found`
            })
          );
          return;
        }
      });
    });
  });

  server.post('/api/host/image', (req, res) => {
    if (!req.session.passport) {
      res.writeHead(403, {
        'Content-Type': 'application/json'
      });
      res.end(
        JSON.stringify({
          status: 'error',
          message: 'Unauthorized'
        })
      );
      return;
    }
    const image = req.files.image;
    const fileName = randomstring.generate(7) + image.name.replace(/\s/g, '');
    const path = __dirname + '/public/img/houses/' + fileName;

    image.mv(path, error => {
      if (error) {
        console.log(error);
        res.writeHead(500, {
          'Content-Type': 'application/json'
        });
        res.end(JSON.stringify({ status: 'error', mesage: error }));
        return;
      }
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });
      res.end(
        JSON.stringify({ status: 'success', path: '/img/houses/' + fileName })
      );
    });
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
