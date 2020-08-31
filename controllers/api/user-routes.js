const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

//Get all users (without passwords)
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
      })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

//Signup route
router.post('/signup',  (req, res) => {
    User.create({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        personal_email: req.body.personal_email,
        pwd: req.body.pwd
    })
      .then(dbUserData => {
        req.session.save(() => {
          req.session.user_id = dbUserData.id;
          req.session.personal_email = dbUserData.personal_email;
          req.session.loggedIn = true;
    
          res.json(dbUserData);
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

//Login route
router.post('/login', (req, res) => {
    User.findOne({
      where: {
        personal_email: req.body.personal_email
      }
    }).then(dbUserData => {
      if (!dbUserData) {
        res.status(400).json({ message: 'No user with that email address!' });
        return;
      }
  
      const validPassword = dbUserData.checkPassword(req.body.pwd);
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
      }

      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.personal_email = dbUserData.personal_email;
        req.session.loggedIn = true;

        res.json({ user: dbUserData, message: 'You are now logged in!' });
      });
  
    });  
});

// Logout route
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    }
    else {
      res.status(404).end();
    }
});

//Update User (except for password)
router.put('/user', withAuth, (req, res) => {

    const fieldsToExclude = ['pwd'];
    const modelFields = Object.keys(User.rawAttributes).filter( s => !fieldsToExclude.includes(s));

    User.update(req.body, {
        fields: modelFields,
        where: {id: req.session.user_id}
    })
      .then(dbUserData => {
        if (!dbUserData[0]) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// GET /api/users/1
router.get('/user', withAuth, (req, res) => {
    User.findOne({
      attributes: { exclude: ['pwd'] },
      where: {
        id: req.session.user_id
      }
    })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;