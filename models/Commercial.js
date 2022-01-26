const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Commercial extends Model { }

Commercial.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // property_type_id: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //       model: 'residental_types',
    //       key: 'id',
    //       unique: false
    //     }
    // },
    // property_city_id: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //       model: 'city',
    //       key: 'id',
    //       unique: false
    //     },
    // },
    duration_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'rent',
          key: 'id',
          unique: false
        },
    },
    price:{
        type:DataTypes.INTEGER,
        defaultValue:1000,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    area: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 100,
        validate: {
          isNumeric: true,
        }
      },
    location:{
        type:DataTypes.STRING,
        allowNull:true
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'commercial',
  }
);

module.exports = Commercial;
