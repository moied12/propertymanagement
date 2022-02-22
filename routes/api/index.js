const router = require('express').Router();


const residentialRoutes = require('./residential-routes')
const commercialRoutes = require('./commercial-routes')
const userRoutes = require('./users-routes')
const cityRoutes = require('./city')
const statusRoutes = require('./status')
const propertytypeRoutes = require('./propertytype')
const rentRoutes = require('./rent')

router.use('/commercial',commercialRoutes)
router.use('/residential', residentialRoutes);
router.use('/user',userRoutes)
router.use('/city',cityRoutes)
router.use('/type',propertytypeRoutes)
router.use('/status',statusRoutes)
router.use('/rent',rentRoutes)

module.exports = router;
