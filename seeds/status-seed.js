const { Status } = require('../models');

const statusData = [
  {
    value: 'Rented',
  },
  {
    value: 'Sold',
  },
  {
    value: 'Reserved',
  },
  {
    value: 'Available',
  },
  {
    value: 'Active',
  },
  {
    value: 'Non Active',
  },
];

const seedStatus = () => Status.bulkCreate(statusData);

module.exports = seedStatus;
