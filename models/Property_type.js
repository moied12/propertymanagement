const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Property_type extends Model {}

Property_type.init(
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
    modelName: 'property_type',
  }
);

module.exports = Property_type;
