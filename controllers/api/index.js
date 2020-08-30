const router = require('express').Router();

const userRoutes = require('./user-routes.js');
// const fontRoutes = require('./card_font-routes');

router.use('/users', userRoutes);
// router.use('/fonts', fontRoutes);

module.exports = router;