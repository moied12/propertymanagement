const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Status extends Model { }

Status.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'status',
  }
);

module.exports = Status;
