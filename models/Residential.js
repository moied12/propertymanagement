const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Residential extends Model { }
Residential.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    property_type_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'property_type',
        key: 'id',
        unique: false
      }
    },
    city_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'cities',
        key: 'id',
        unique: false
      },
    },
    // property_location_id: {
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
    images: {
      type: DataTypes.JSON
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER,
      defaultValue: 1000,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    beds: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      validate: {
        isNumeric: true,
      }
    },
    baths: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      validate: {
        isNumeric: true,
      }
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 100,
      validate: {
        isNumeric: true,
      }
    },
    furnished: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'status',
        key: 'id',
        unique: false
      },
      defaultValue: 1
    },
    onPlan: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'residential',
  }
);

module.exports = Residential;
