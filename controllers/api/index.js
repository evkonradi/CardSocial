const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const fontRoutes = require('./card_font-routes');
const backgroundRoutes = require('./card_background-routes');
const iconRoutes = require('./card_icon-routes');
const cardRoutes = require('./card-routes');

router.use('/users', userRoutes);
router.use('/fonts', fontRoutes);
router.use('/backgrounds', backgroundRoutes);
router.use('/icons', iconRoutes);
router.use('/cards', cardRoutes);

module.exports = router;