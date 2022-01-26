const { Rent } = require('../models');

const rentData = [
  {
    duration: '3 months',
  },
  {
    duration: '6 months',
  },
  {
    duration: '12 months',
  },
  {
    duration: 'Buy',
  },

];

const seedRent = () => Rent.bulkCreate(rentData);

module.exports = seedRent;
