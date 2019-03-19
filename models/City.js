const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const City = new Schema({
    name: String,
    country: String,
    capital: Boolean,
    location : {
        lat: Number,
        long: Number
    },
    lastModifiedDate: Date
});

module.exports = mongoose.model('City', City);