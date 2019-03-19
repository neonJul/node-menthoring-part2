const City = require('../models/City');

module.exports.getCities = (req, res) => {
    City.find().exec((err, cities) => {
        if (err) {
            console.log(err);
        } else {
            return res.json(cities);
        }
    });
};

module.exports.postCity = (req, res) => {
    const city = new City ({
        name: req.body.name,
        country: req.body.country,
        capital: req.body.capital,
        location: {
            lat: req.body.location.lat,
            long: req.body.location.long
        },
        lastModifiedDate: new Date()
    });
    city.save((err, city) => {
        if (err) {
            console.log(err);
        } else {
            return res.json(city);
        }
    })
};

module.exports.updateCityByID = (req, res) => {

};

module.exports.deleteCityByID = (req, res) => {
    City.findByIdAndRemove(req.params.id).exec((err, city) => {
        if (err) {
            console.log(err);
        } else {
            res.json(city._id);
        }
    });
};

module.exports.getRandomCity = (req, res) => {
    City.count().exec((err, count) => {
        const random = Math.floor(Math.random() * count);
        City.findOne().skip(random).exec((err, city) => {
                res.json(city);
            })
    })
};