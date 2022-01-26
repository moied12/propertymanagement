const { Residential } = require('../models');

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
    property_type_id:2,
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
    property_type_id:2,
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
    property_type_id:2,
  },
];

const seedResidentials = () => Residential.bulkCreate(resData);

module.exports = seedResidentials;
