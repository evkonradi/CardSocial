const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Card, Font, Icon, Background } = require('../models');

router.get('/', (req, res) => {

    Card.findOne({
        attributes: { exclude: ['pwd'] },
        where: {
          card_code: req.body.card_code
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
            res.json(dbUserData);
            //const card = dbUserData.get({ plain: true });
            //res.render('usercard', {card});
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

module.exports = router;