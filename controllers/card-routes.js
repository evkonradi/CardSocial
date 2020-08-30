const router = require('express').Router();
const userRoutes = require('./card_font-routes');

router.get('/', (req, res) => {
    res.render('usercard');
});

module.exports = router;