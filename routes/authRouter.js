const express = require('express');
const router = express.Router();
const Controller = require('../controllers/authController');

const passport = require('passport');

//jwt authentication
router.route('/')
    .post(Controller.authentication);

router.route('/passport')
    .post(passport.authenticate('local'), Controller.passportLocalAuthentication);

router.route('/facebook')
    .get(passport.authenticate('facebook'), Controller.facebookAuthentication);

router.route('/twitter')
    .get(passport.authenticate('twitter'), Controller.twitterAuthentication);

router.route('/google')
    .get(passport.authenticate('google', { scope: 'https://www.google.com/m8/feeds' }), Controller.googleAuthentication);

module.exports = router;
