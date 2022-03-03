const { User } = require('../models');

const userData = [
  {
    name: 'impakt-admin',
    email: 'admin@impakt.pk',
    password: 'impakt1234',
    phone: '030012345671',
    is_admin: true,
  },
  {
    name: 'test-customer',
    email: 'customer@impakt.pk',
    password: 'impakt1234',
    phone: '030012345672',
    is_admin: false,
  },
  {
    name: 'test-seller',
    email: 'seller@impakt.pk',
    password: 'impakt1234',
    phone: '030012345673',
    is_admin: false,
  },

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
