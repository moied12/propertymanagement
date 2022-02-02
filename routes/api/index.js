const router = require('express').Router();


const residentialRoutes = require('./residential-routes')
const commercialRoutes = require('./commercial-routes')
const userRoutes = require('./users-routes')

router.use('/commercial',commercialRoutes)
router.use('/residential', residentialRoutes);
router.use('/user',userRoutes)

module.exports = router;
