const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Cheques extends Model {}

Cheques.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'cheques',
  }
);

module.exports = Cheques;
