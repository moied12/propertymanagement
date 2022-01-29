
const Commercial = require('./Commercial')
const Residential = require('./Residential');
const Rent = require('./Rent')
const Property_type = require('./Property_type')
const Status = require('./Status')
const Cities = require('./Cities')
const Users = require('./Users')


Residential.belongsTo(Cities,{
  foreignKey: 'city_id'
});
Cities.hasMany(Residential, {
  foreignKey: 'city_id',
});
Residential.belongsTo(Rent,{
  foreignKey: 'duration_id'
});
Rent.hasMany(Residential, {
  foreignKey: 'duration_id',
});
Residential.belongsTo(Property_type,{
  foreignKey: 'property_type_id'
});
Property_type.hasMany(Residential, {
  foreignKey: 'property_type_id',
});
Residential.belongsTo(Status,{
  foreignKey: 'status_id'
});
Status.hasMany(Residential, {
  foreignKey: 'status_id',
});



Commercial.belongsTo(Cities,{
  foreignKey: 'city_id'
});
Cities.hasMany(Commercial, {
  foreignKey: 'city_id',
});
Commercial.belongsTo(Rent,{
  foreignKey: 'duration_id'
});
Rent.hasMany(Commercial, {
  foreignKey: 'duration_id',
});
Commercial.belongsTo(Property_type,{
  foreignKey: 'property_type_id'
});
Property_type.hasMany(Commercial, {
  foreignKey: 'property_type_id',
});
Commercial.belongsTo(Status,{
  foreignKey: 'status_id'
});
Status.hasMany(Commercial, {
  foreignKey: 'status_id',
});


module.exports = {
  Users,  
  Cities,
  Status,
  Property_type,
  Commercial,
  Rent,
  Residential
};
