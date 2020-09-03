const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Font, Background, Icon, Card } = require('../models');
const { createCode } = require('../utils/code');

router.get('/:id', (req, res) => {
    Card.findOne({
        where: {
            id: req.params.id
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
                model: Background
            },
            {
                model: Icon
            }
        ]
    })
    .then(dbCardData => {
        console.log(dbCardData);
        const newcards = dbCardData.get({ plain: true });
        res.render('dashboard', { newcards: newcards });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;