const router = require('express').Router();
const userRoutes = require('./user');

// Post Routes
router.use('/user', userRoutes);

module.exports = router;
