const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Properties extends Model { }

Properties.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'roperties',
  }
);

module.exports = Properties;
