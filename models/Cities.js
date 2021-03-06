const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Cities extends Model { }

Cities.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'cities',
  }
);

module.exports = Cities;
