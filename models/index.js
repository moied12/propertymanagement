
const Commercial = require('./Commercial')
const Residential = require('./Residential');
const Rent = require('./Rent')
const Residential_type = require('./Residential_type')

Residential.belongsTo(Rent,{
  foreignKey: 'duration_id'
});

Rent.hasMany(Residential, {
  foreignKey: 'duration_id',
});

Commercial.belongsTo(Rent,{
  foreignKey: 'duration_id'
});

Rent.hasMany(Commercial, {
  foreignKey: 'duration_id',
});

Residential.belongsTo(Residential_type,{
  foreignKey: 'property_type_id'
});

Residential_type.hasMany(Residential, {
  foreignKey: 'property_type_id',
});

module.exports = {
  Residential_type,
  Commercial,
  Rent,
  Residential
};