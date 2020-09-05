const router = require('express').Router();
var QRCode = require('qrcode');

router.get('/', (req, res) => {
    res.render('homepage', {loggedIn: req.session.loggedIn});
});

router.get('/login', (req, res) => {
    res.render('login');
  });
  
async function generateQR(res, code, background_name) {
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

    const qrImage = await QRCode.toDataURL('http://localhost:3001/qr-code/' + code + '/' + background_name, opts);
    res.render('qr-code', {qrImage, background_name});
  } catch (err) {
    console.error(err)
  }
};

router.get('/qr-code/:code/:background_name', (req, res) => {
  generateQR(res, req.params.code, req.params.background_name);
});


module.exports = router;