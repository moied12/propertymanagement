const { Commercial } = require('../models');

const comData = [
  {
    duration_id: 1,
    price:86968,
    name:"moied",
    area:12312,
    furnished:false,
    location: 'apppl312e',
    property_type_id:2,
    city_id:1,
    user_id:2
  },
  {
    duration_id: 1,
    price:86968,
    name:"moasdied",
    area:12312,
    furnished:false,
    location: 'appp12le',
    property_type_id:2,
    city_id:1,
    user_id:2
  },
  {
    duration_id: 1,
    price:86968,
    name:"moi123ed",
    area:12312,
    furnished:false,
    location: 'appp123le',
    property_type_id:2,
    city_id:1,
    user_id:2
  },
];

const seedCommercials = () => Commercial.bulkCreate(comData);

module.exports = seedCommercials;
