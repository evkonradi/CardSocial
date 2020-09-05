const router = require('express').Router();
var QRCode = require('qrcode');

router.get('/', (req, res) => {
    res.render('homepage', {loggedIn: req.session.loggedIn});
});

router.get('/login', (req, res) => {
    res.render('login');
  });
  
async function generateQR(res, code) {
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

    const qrImage = await QRCode.toDataURL('http://localhost:3001/qr/' + code, opts);
    res.render('qr-code', {qrImage});
  } catch (err) {
    console.error(err)
  }
};

router.get('/qr-code/:code', (req, res) => {
  generateQR(res, req.params.code);
});


module.exports = router;