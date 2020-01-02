const user = 'bennywang';
const password = '';
const host = 'localhost';
const database = 'gamednd';

const Sequelize = require('sequelize');

const sequelize = new Sequelize(database, user, password, {
  host,
  dialect: 'postgres',
  logging: false
});

module.exports = sequelize;
