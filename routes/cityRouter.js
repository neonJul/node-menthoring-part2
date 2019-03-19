const express = require('express');
const router = express.Router();
const Controller = require('../controllers/cityController');

router.route('/')
    .get(Controller.getCities)
    .post(Controller.postCity);

router.route('/rand')
    .get(Controller.getRandomCity);

router.route('/:id')
    .put(Controller.updateCityByID)
    .delete(Controller.deleteCityByID);

module.exports = router;