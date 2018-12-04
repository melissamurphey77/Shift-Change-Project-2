const router = require('express').Router(); // eslint-disable-line new-cap
const shiftRoutes = require('./shifts');
const employeeRoutes = require('./employees');
router.use('/shifts', shiftRoutes);
router.use('/employees', employeeRoutes);

module.exports = router;
