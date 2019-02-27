const passport = require('passport')
    , TwitterStrategy = require('passport-twitter').Strategy;

const TWITTER_CONSUMER_KEY = 'TWITTER_CONSUMER_KEY';
const TWITTER_CONSUMER_SECRET = 'TWITTER_CONSUMER_SECRET';
const TWITTER_CALLBACK_URL = 'http://www.example.com/auth/twitter/callback';

passport.use(new TwitterStrategy({
        consumerKey: TWITTER_CONSUMER_KEY,
        consumerSecret: TWITTER_CONSUMER_SECRET,
        callbackURL: TWITTER_CALLBACK_URL
    },
    (token, tokenSecret, profile, done) => done(null, true)
));