const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Rentals extends Model {}

Rentals.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // property_id
    // user_id
    // price
    // commission
    // date 
    // payment information 
    // cheque ids
// customerid
// deposit

  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'rentals',
  }
);

module.exports = Rentals;
