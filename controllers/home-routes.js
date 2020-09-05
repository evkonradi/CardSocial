const router = require('express').Router();
var QRCode = require('qrcode');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    res.render('homepage', {loggedIn: req.session.loggedIn});
});

router.get('/login', (req, res) => {
    res.render('login');
  });
  
async function generateQR(req, res, code, background_name) {
  try {

    var opts = {
      errorCorrectionLevel: 'H',
      type: 'image/webp',
      width:400,
      margin:0,
      color: {
        dark:"#400135",
        light:"#f2f2f2"
      }
    }

    const qrImage = await QRCode.toDataURL('https://cryptic-shelf-96558.herokuapp.com/card/' + code, opts);
    res.render('qr-code', {qrImage, background_name, loggedIn: req.session.loggedIn});
  } catch (err) {
    console.error(err)
  }
};

router.get('/qr-code/:code/:background_name', withAuth, (req, res) => {
  generateQR(req, res, req.params.code, req.params.background_name);
});

router.get('/errorcard',  (req, res) => {
  res.render('errorcard', {loggedIn: req.session.loggedIn});
});

module.exports = router;