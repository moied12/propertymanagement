const router = require('express').Router();


const residentialRoutes = require('./residential-routes')
const commercialRoutes = require('./commercial-routes')
const userRoutes = require('./users-routes')
const cityRoutes = require('./city')
const statusRoutes = require('./status')
const propertytypeRoutes = require('./propertytype')
const rentRoutes = require('./rent')
const customerRoutes = require('./customer')
const residential_salesRoutes = require('./residential_sales-routes')
const chequesRoutes = require('./cheques-routes')



router.use('/commercial',commercialRoutes)
router.use('/residential', residentialRoutes);
router.use('/user',userRoutes)
router.use('/city',cityRoutes)
router.use('/type',propertytypeRoutes)
router.use('/status',statusRoutes)
router.use('/rent',rentRoutes)
router.use('/customer',customerRoutes)
router.use('/residentialSales',residential_salesRoutes)
router.use('/cheques',chequesRoutes)

module.exports = router;
