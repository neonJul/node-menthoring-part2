const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('./middlewares/cookieParser');
const auth = require('./middlewares/auth');
const authRouter = require('./routes/authRouter');
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');
const passport = require('passport');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser);

app.use(passport.initialize());
require('./passport/localStrategy');
require('./passport/facebookStrategy');
require('./passport/twitterStrategy');
require('./passport/googleOAuthStrategy');

app.use('/auth', authRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);

app.use(auth);

module.exports = app;