const { Cities } = require('../models');

const citiesData = [
  {
    city: 'Dubai',
  },
  {
    city: 'Abu Dhabi',
  },
  {
    city: 'Fujairah',
  },
  {
    city: 'Ras Al Khaimah',
  },
  {
    city: 'Umm AL Quwain',
  },
  {
    city: 'Sharjah',
  },
  {
    city: 'Ajman',
  },
];

const seedCities = () => Cities.bulkCreate(citiesData);

module.exports = seedCities;
