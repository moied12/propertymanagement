const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Residential_type extends Model {}

Residential_type.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'residential_type',
  }
);

module.exports = Residential_type;
