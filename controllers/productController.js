const products = [
    {
        product: 'Apple',
        reviews: ['1', '2', '3']
    },
];

module.exports.getProducts = (req, res) => {
    res.send(products);
};

module.exports.getProductByID = (req, res) => {
    res.send(products[req.params.id] ? products[req.params.id] : "There is no product with such id");
};

module.exports.getProductReviews = (req, res) => {
    res.send(products[req.params.id] ? products[req.params.id].reviews : "There is no product with such id");
};

module.exports.postProduct = (req, res) => {
    products.push({ product: req.body.product });
    res.send(products[products.length - 1]);
};
