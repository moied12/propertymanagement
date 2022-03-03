const { Customer } = require('../models');

const customerData = [
  {
    firstName: 'impakt-admin',
    email: 'admin@impakt.pk',
    password: 'impakt1234',
    phone: '030012345671',
    lastName:'Test Account',
    nationality:'Egypt',

  },
  {
    firstName: 'test-customer',
    email: 'customer@impakt.pk',
    password: 'impakt1234',
    phone: '030012345672',
    lastName:'Account 2',
    nationality:'United State of America',
  },
  {
    firstName: 'test-seller',
    email: 'seller@impakt.pk',
    password: 'impakt1234',
    phone: '030012345673',
    lastName:'Account 3',
    nationality:'Pakistan',
  },

];

const seedCustomer = () => Customer.bulkCreate(customerData);

module.exports = seedCustomer;
