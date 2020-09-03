const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Card, Font, Icon, Background } = require('../models');

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
            const card = dbUserData.get({ plain: true });
            res.render('usercard', {card: card});
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

module.exports = router;