const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Brokers extends Model {}

Brokers.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone,email,rera,visa,reraexp,visaexp, image, password, salary
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'brokers',
  }
);

module.exports = Brokers;
