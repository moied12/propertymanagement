const { Commercial } = require('../models');

const resData = [
  {
    duration_id: 1,
    price:86968,
    name:"moied",
    beds:21,
    baths:1,
    area:12312,
    furnished:false,
    location: 'apppl312e',
  },
  {
    duration_id: 1,
    price:86968,
    name:"moasdied",
    beds:21,
    baths:1,
    area:12312,
    furnished:false,
    location: 'appp12le',
  },
  {
    duration_id: 1,
    price:86968,
    name:"moi123ed",
    beds:21,
    baths:1,
    area:12312,
    furnished:false,
    location: 'appp123le',
  },
];

const seedCommercials = () => Commercial.bulkCreate(resData);

module.exports = seedCommercials;
