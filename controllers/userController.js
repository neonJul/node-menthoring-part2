const User = require('../models/User');

module.exports.getUsers = (req, res) => {
    User.find().exec((err, users) => {
        if (err) {
            console.log(err);
        } else {
            return res.json(users);
        }
    });
};

module.exports.deleteUserByID = (req, res) => {
    User.findByIdAndRemove(req.params.id).exec((err, user) => {
        if (err) {
            console.log(err);
        } else {
            res.json(user._id);
        }
    });
};