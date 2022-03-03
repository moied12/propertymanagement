const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Commercial_sales extends Model { }

Commercial_sales.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // customerid
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    commission: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    payment_information: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    depsoit: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'commercial_sales',
  }
);

module.exports = Commercial_sales;
