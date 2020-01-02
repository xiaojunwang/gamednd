const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const bodyParser = require('body-parser')

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('./model.js').User;
const sequelize = require('./model.js').sequelize;

const sessionStore = new SequelizeStore({
  db: sequelize,
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

  server.use(bodyParser.json())
  server.use(
    session({
      secret: '365364dfgsdgd765634',
      resave: false,
      saveUninitialized: true,
      name: 'gamednd',
      cookie: {
        maxAge: 30 * 24 * 60 * 60 * 1000, //30 days
      },
      store: sessionStore,
    }),
    passport.initialize(),
    passport.session()
    // fileupload()
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

      res.end(JSON.stringify({ status: 'success', message: 'User added' }));
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
            message: err,
          })
          );
          return;
        }
        if (!user) {
          res.statusCode = 500;
          res.end(
            JSON.stringify({
              status: 'error',
              message: 'No user matching credentials',
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
                  message: err,
                })
                );
                return;
              }
              return res.end(
                JSON.stringify({
                  status: 'success',
                  message: 'Logged in',
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
 
    server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
