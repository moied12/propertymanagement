const { Brokers  } = require('../models');
date1 = new Date();
const brokerData = [
  {
    rera: 234132,
    eid_number: 1324132,
    reraexp: date1.toISOString().slice(0,10),
    visaexp:date1.toISOString().slice(0,10) ,
    image: "23asdasd",
    salary:123213 ,
    user_id:2
  },
//   {
//     rera: ,
//     eid_number: ,
//     reraexp: ,
//     visaexp: ,
//     image: ,
//     salary: ,
//   },

];

const seedBrokers = () => Brokers.bulkCreate(brokerData);

module.exports = seedBrokers;
