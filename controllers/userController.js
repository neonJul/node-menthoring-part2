const Sequelize = require('sequelize');
const UserModel = require('../models/users');
const sequelize = require('../database/connection');

const User = UserModel(sequelize, Sequelize);

module.exports.getUsers = (req, res) => {
    User.
        findAll()
        .then(data => res.json(data))
        .catch(err => console.log(err))
};