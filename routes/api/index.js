const router = require('express').Router();


const residentialRoutes = require('./residential-routes')
const commercialRoutes = require('./commercial-routes')

router.use('/commercial',commercialRoutes)
router.use('/residential', residentialRoutes);

module.exports = router;
