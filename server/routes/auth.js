const express = require('express');
const { signin, signout } = require('../controllers/auth');

const router = express.Router();

router.route('/auth/signin').post(signin);

router.route('/auth/signout').get(signout);

// router.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;