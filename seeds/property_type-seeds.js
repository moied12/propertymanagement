const { Residential_type } = require('../models');

const typeData = [
  {
    type: 'Apartment',
  },
  {
    type: 'Townhouse',
  },
  {
    type: 'Villa Compound',
  }, 
  {
    type: 'Residential Plot',
  }, 
  {
    type: 'Residential Building',
  }, 
  {
    type: 'Villa',
  }, 
  {
    type: 'Penthouse',
  }, 
  {
    type: 'Hotel Apartment',
  },
  {
    type: 'Residential Floor',
  },
  {
    type: 'Mixed Use Land',
  },
  {
    type: 'Factory',
  },
  {
    type: 'Commercial Floor',
  },
  {
    type: 'Shop',
  },
  {
    type: 'Showroom',
  },
  {
    type: 'Industrial Land',
  },
  {
    type: 'Commercial Building',
  },
  {
    type: 'Commercial Plot',
  },
  {
    type: 'Commercial Villa',
  },
  {
    type: 'Warehouse',
  },
  {
    type: 'Office',
  },
  {
    type: 'Labour Camp',
  },
  {
    type: 'Bulk Unit',
  },
  {
    type: 'Other Commercial',
  },
];

const seedType = () => Residential_type.bulkCreate(typeData);

module.exports = seedType;
