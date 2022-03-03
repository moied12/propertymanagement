const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Residential_sales extends Model { }

Residential_sales.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    commission: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    payment_information: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deposit: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'residential_sales',
  }
);

module.exports = Residential_sales;
