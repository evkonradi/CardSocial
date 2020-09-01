const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    User.findOne({
        attributes: { exclude: ['pwd'] },
        where: {
          id: req.session.user_id
        }
      })
        .then(dbUserData => {
            const profile = dbUserData.get({ plain: true });
            res.render('dashboard', { profile, loggedIn: true});
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

module.exports = router;