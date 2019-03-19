const express = require('express');
const router = express.Router();
const Controller = require('../controllers/userController');

router.route('/')
    .get(Controller.getUsers);

router.route('/:id')
    .delete(Controller.deleteUserByID);

module.exports = router;