const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    product: String,
    reviews : [ String ],
    lastModifiedDate: Date
});

module.exports = mongoose.model('Product', Product);