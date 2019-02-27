const express = require('express');
const router = express.Router();
const Controller = require('../controllers/userController');

router.route('/')
    .get(Controller.getUsers);

module.exports = router;