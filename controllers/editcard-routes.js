const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Card, Font, Icon, Background } = require('../models');
const withAuth = require('../utils/auth');

router.get('/editcard', (req, res) => {
    res.render('editcard', {loggedIn: req.session.loggedIn});
});

router.get('/:card_code', (req, res) => {

    Card.findOne({
        where: {
          card_code: req.params.card_code
        },
        include: [
            {
                model: User,
                attributes: { exclude: ['pwd'] }
            },
            {
                model: Font
            },
            {
                model: Icon
            },
            {
                model: Background
            },
      
        ]
      })
      .then(dbUserData => {
        //const card = dbUserData.get({ plain: true });
        router.get('/editcard/:cardcode', withAuth, (req, res) => {
            res.render('editcard', {loggedIn: req.session.loggedIn});
          });
    });
    console.log("You are on the edit page");
});

module.exports = router;