const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Brokers extends Model {}

Brokers.init(
  {
  rera: {
    type: DataTypes.INTEGER,
  },
  eid_number: {
    type: DataTypes.INTEGER,
  },
  // [0-9]{3}-[0-9]{4}-[0-9]{7}-[0-9]
  reraexp: {
    type: DataTypes.DATEONLY,
  },
  visaexp: {
    type: DataTypes.DATEONLY,
  },
   image: {
    type: DataTypes.STRING,
  },
   salary: {
    type: DataTypes.INTEGER,
  },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'brokers',
  }
);

module.exports = Brokers;
