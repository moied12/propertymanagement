
const Commercial = require('./Commercial')
const Residential = require('./Residential');
const Rent = require('./Rent')
const Property_type = require('./Property_type')
const Status = require('./Status')
const Cities = require('./Cities')
const User = require('./User')
const Customer = require('./Customer')
const Brokers = require('./Brokers')
const Residential_sales = require('./Residential_sales')
const Commercial_sales = require('./Commercial_sales')
const Cheques = require('./Cheques');
const Properties = require('./Properties');

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


Brokers.belongsTo(User, {
  foreignKey: 'user_id',
});

 
Cheques.belongsTo(Customer,{
  foreignKey: 'customer_id',
})

Residential.belongsTo(User, {
  foreignKey: 'user_id',
});
Commercial.belongsTo(User, {
  foreignKey: 'user_id',
});



Residential_sales.belongsTo(User, {
  foreignKey: 'user_id',
});
Residential_sales.belongsTo(Customer, {
  foreignKey: 'customer_id',
});
Residential_sales.belongsTo(Residential, {
  foreignKey: 'residential_id',
});
Residential_sales.hasMany(Cheques);


Commercial_sales.belongsTo(User, {
  foreignKey: 'user_id',
});
Commercial_sales.belongsTo(Customer, {
  foreignKey: 'customer_id',
});
Commercial_sales.belongsTo(Commercial, {
  foreignKey: 'commercial_id', 
});
Commercial_sales.hasMany(Cheques);


module.exports = {
  Brokers,
  User,  
  Cities,
  Status,
  Property_type,
  Commercial,
  Rent,
  Residential,
  Customer,
  Cheques,
  Commercial_sales,
  Residential_sales,
  Properties
};
