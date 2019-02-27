const passport = require('passport')
    , FacebookStrategy = require('passport-facebook').Strategy;

const FACEBOOK_APP_ID = 'FACEBOOK_APP_ID';
const FACEBOOK_APP_SECRET = 'FACEBOOK_APP_SECRET';
const FACEBOOK_CALLBACK_URL = 'http://www.example.com/auth/facebook/callback';

passport.use(new FacebookStrategy({
        clientID: FACEBOOK_APP_ID,
        clientSecret: FACEBOOK_APP_SECRET,
        callbackURL: FACEBOOK_CALLBACK_URL
    },
    (accessToken, refreshToken, profile, done) =>
        //search here in db for user and return it instead of true
        done(null, true)
));