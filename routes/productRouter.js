const express = require('express');
const router = express.Router();
const Controller = require('../controllers/productController');

router.route('/')
    .get(Controller.getProducts)
    .post(Controller.postProduct);

router.route('/:id')
    .get(Controller.getProductByID);

router.route('/:id/reviews')
    .get(Controller.getProductReviews);

module.exports = router;