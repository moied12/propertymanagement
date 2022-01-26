const seedType = require('./property_type-seeds')
const seedCommercials = require('./commercial-seeds');
const seedRent = require('./rent-seeds');
const seedResidentials = require('./residential-seeds');
const seedStatus = require('./status-seed')
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedStatus();
  console.log('\n----- Rent SEEDED -----\n');

  await seedType();
  console.log('\n----- Rent SEEDED -----\n');

  await seedRent();
  console.log('\n----- Rent SEEDED -----\n');

  await seedResidentials();
  console.log('\n----- RESIDENTIALS SEEDED -----\n');

  await seedCommercials();
  console.log('\n----- COMMERCIALS SEEDED -----\n');

  process.exit(0);
};

seedAll();
