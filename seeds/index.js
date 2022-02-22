const seedType = require('./property_type-seeds')
const seedCommercials = require('./commercial-seeds');
const seedRent = require('./rent-seeds');
const seedResidentials = require('./residential-seeds');
const seedStatus = require('./status-seed')
const seedCities = require('./city-seed')

const sequelize = require('../config/connection');
const seedUsers = require('./users-seed');
const seedBrokers = require('./broker-seed');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedCities();
  console.log('\n----- CITIES SEEDED -----\n');

  await seedStatus();
  console.log('\n----- STATUS SEEDED -----\n');

  await seedType();
  console.log('\n----- TYPE SEEDED -----\n');

  await seedRent();
  console.log('\n----- RENT SEEDED -----\n');
  
  await seedUsers();
  console.log('\n----- USERS  SEEDED -----\n');

  await seedResidentials();
  console.log('\n----- RESIDENTIALS SEEDED -----\n');

  await seedCommercials();
  console.log('\n----- COMMERCIALS SEEDED -----\n');


  await seedBrokers();
  
  process.exit(0);
};

seedAll();
