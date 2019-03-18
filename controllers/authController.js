const jwt = require('jsonwebtoken');
// const config = require('../config/config');
const success = {
    code: 200,
    message: "OK",
    data: {
        user: {
            email: "...",
            username: "..."
        }
    },
};

const error = {
    "code": 404,
    "message": "Not Found",
    "data": {},
};

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

module.exports.authentication = (req, res) => {
    const user = hardcodedUsers.find(user => user.username === req.body.username && user.password === req.body.password);
    if (user) {
        success.token = jwt.sign({ user }, "secretKey");
        // success.token = jwt.sign({ user }, config.secretKey);
        res.send(success);
    } else {
        res.send(error);
    }
};

module.exports.passportLocalAuthentication = (req, res) => {
    res.send(req.user);
};

module.exports.facebookAuthentication = (req, res) => {
    res.send('facebook');
};

module.exports.twitterAuthentication = (req, res) => {
    res.send('twitter')
};

module.exports.googleAuthentication = (req, res) => {
    res.send('google')
};