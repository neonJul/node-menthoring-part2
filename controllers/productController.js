const Product = require('../models/Product');

module.exports.getProducts = (req, res) => {
    Product.find().exec((err, products) => {
        if (err) {
            console.log(err);
        } else {
            return res.json(products);
        }
    });
};

module.exports.getProductByID = (req, res) => {
    Product.findById(req.params.id).exec((err, product) => {
        if (err) {
            console.log(err);
        } else {
            product
            ? res.json(product)
            : res
                .status(404)
                .json({ message: 'Product not found.' })
        }
    });
};

module.exports.getProductReviews = (req, res) => {
    Product.findById(req.params.id).exec((err, product) => {
        if (err) {
            console.log(err);
        } else {
            product
                ? res.json(product.reviews)
                : res
                    .status(404)
                    .json({ message: 'Product not found.' })
        }
    });
};

module.exports.postProduct = (req, res) => {
    Product.findOne({ product: req.body.product }).exec((err, product) => {
        if (err) {
            console.log(err);
        } else {
            if (product) {
                product.lastModifiedDate = new Date();
                product.reviews.push( req.body.reviews );
                product.save((err, product) => {
                    if (err) {
                        console.log(err);
                    } else {
                        return res.json(product);
                    }
                });
            } else {
                const product = new Product ({
                    product: req.body.product,
                    reviews: [ req.body.reviews ],
                    lastModifiedDate: new Date()
                });
                product.save((err, product) => {
                    if (err) {
                        console.log(err);
                    } else {
                        return res.json(product);
                    }
                })
            }
        }
    });
};

module.exports.deleteProductByID = (req, res) => {
    Product.findByIdAndRemove(req.params.id).exec((err, product) => {
        if (err) {
            console.log(err);
        } else {
            res.json(product._id);
        }
    });
};
