const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Expenses extends Model {}

Expenses.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // type
    // user_id
    // amount
    // date 
    // expense type
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'expenses',
  }
);

module.exports = Expenses;
