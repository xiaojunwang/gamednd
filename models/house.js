const Sequelize = require('sequelize');
const sequelize = require('../database.js');

class House extends Sequelize.Model {}

House.init(
  {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    host: { type: Sequelize.DataTypes.INTEGER, allowNull: false },
    picture: { type: Sequelize.DataTypes.STRING, allowNull: false },
    type: { type: Sequelize.DataTypes.STRING, allowNull: false }, //i.e. board game, video game
    town: { type: Sequelize.DataTypes.STRING, allowNull: false },
    title: { type: Sequelize.DataTypes.STRING, allowNull: false },
    price: { type: Sequelize.DataTypes.INTEGER, allowNull: false },
    superhost: {
      type: Sequelize.DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    description: { type: Sequelize.DataTypes.STRING, allowNull: false },
    guests: { type: Sequelize.DataTypes.INTEGER, allowNull: false },
    roomOfPlay: { type: Sequelize.DataTypes.STRING, allowNull: false },
    wifi: { type: Sequelize.DataTypes.BOOLEAN, allowNull: false },
    houseTemperatureInF: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false
    },
    freeParking: { type: Sequelize.DataTypes.BOOLEAN, allowNull: false },
    // gameEquipmentProvided: {
    //   type: Sequelize.DataTypes.BOOLEAN,
    //   allowNull: false
    // },
    lightSnackProvided: { type: Sequelize.DataTypes.BOOLEAN, allowNull: false },
    lightBeverageProvided: {
      type: Sequelize.DataTypes.BOOLEAN,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'house',
    timestamps: false
  }
);

module.exports = House;
