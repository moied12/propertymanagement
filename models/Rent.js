const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Rent extends Model { }

Rent.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'rent',
  }
);

module.exports = Rent;