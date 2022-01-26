const { Status } = require('../models');

const statusData = [
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

const seedStatus = () => Status.bulkCreate(statusData);

module.exports = seedStatus;
