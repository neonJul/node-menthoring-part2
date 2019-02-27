const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuthStrategy;

const GOOGLE_CONSUMER_KEY = 'GOOGLE_CONSUMER_KEY';
const GOOGLE_CONSUMER_SECRET = 'GOOGLE_CONSUMER_SECRET';
const GOOGLE_CALLBACK_URL = 'http://www.example.com/auth/google/callback';

// Use the GoogleStrategy within Passport.
//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a token, tokenSecret, and Google profile), and
//   invoke a callback with a user object.
passport.use(new GoogleStrategy({
        consumerKey: GOOGLE_CONSUMER_KEY,
        consumerSecret: GOOGLE_CONSUMER_SECRET,
        callbackURL: GOOGLE_CALLBACK_URL
    },
    (token, tokenSecret, profile, done) => done(null, true)
));