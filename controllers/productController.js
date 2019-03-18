const Sequelize = require('sequelize');
const ProductModel = require('../models/products');
const sequelize = require('../database/connection');

const Product = ProductModel(sequelize, Sequelize);

module.exports.getProducts = (req, res) => {
    Product.
        findAll()
        .then(data => res.json(data))
        .catch(err => console.log(err))
};

module.exports.getProductByID = (req, res) => {
    Product
        .findById(req.params.id)
        .then(data => data
            ? res.json(data)
            : res
                .status(404)
                .json({message: 'Product not found.'})
        )
        .catch(err => console.log(err))
};

module.exports.getProductReviews = (req, res) => {
    Product
        .findById(req.params.id)
        .then(data => data
            ? res.json(data.review)
            : res
                .status(404)
                .json({message: 'Product not found.'})
        )
        .catch(err => console.log(err))
};

module.exports.postProduct = (req, res) => {
    const newProduct = {
        product: req.body.product
    };

    Product
        .create(newProduct)
        .then(created => res.json(created))
        .catch(error => res.send(error));
};
