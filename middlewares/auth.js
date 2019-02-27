const jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports = auth = (req, res, next) => {
    jwt.verify(req.headers.authorization.split(' ')[1], config.secretKey, (err, decoded) => {
        if (err) {
            throw err;
        }
        next();
    });
};