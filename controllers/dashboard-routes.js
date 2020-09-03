const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Card, Font, Icon, Background } = require('../models');
const withAuth = require('../utils/auth');
const { profile } = require('console');

async function getDashboardData(req, res){
  
  var resUser = await User.findOne({
    attributes: { exclude: ['pwd'] },
    where: {
      id: req.session.user_id
    }
  });

  var resCards = await Card.findAll({
    where: {
      user_id: req.session.user_id
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

  });

  const profile = resUser.get({ plain: true });
  const cards = resCards.map(card => card.get({ plain: true }));

  res.render('dashboard', {profile, loggedIn: true, cards});
}

router.get('/', withAuth, (req, res) => {
  getDashboardData(req, res);
});

module.exports = router;