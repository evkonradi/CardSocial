const router = require('express').Router();
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const cardRoutes = require('./card-routes.js');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/card', cardRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;