const passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;

const hardcodedUsers = [
    {
        username: 'somebody0',
        password: 'somebodyPassword0'
    },
    {
        username: 'somebody1',
        password: 'somebodyPassword1'
    },
];

passport.serializeUser((user, done) => {
    done(null, user.username);
});

passport.deserializeUser((username, done) => {
    done(null, hardcodedUsers.find((user) => user.username === username));
});

passport.use(new LocalStrategy(
    (username, password, done) => {
        const user = hardcodedUsers.find(user => user.username === username && user.password === password);
        if (user) {
            return done(null, user);
        } else {
            return done(null, false, {message: 'User not found.'});
        }
    }
));