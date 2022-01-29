const { User } = require('../models');

const userData = [
  {
    name: 'impakt-admin',
    email: 'admin@impakt.pk',
    password: 'impakt1234',
    phone: '030012345671',
    is_admin: true,
    is_seller: true,
  },
  {
    name: 'test-customer',
    email: 'customer@impakt.pk',
    password: 'impakt1234',
    phone: '030012345672',
    is_admin: false,
    is_seller: false,
  },
  {
    name: 'test-seller',
    email: 'seller@impakt.pk',
    password: 'impakt1234',
    phone: '030012345673',
    is_admin: false,
    is_seller: false,
  },

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
