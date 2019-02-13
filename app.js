const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('./middlewares/cookieParser');

const products = [
    {
        product: 'Apple',
        reviews: ['1', '2', '3']
    },
    {
        product: 'Banana',
        reviews: ['fhfhjf1', 'fff2', 'sss3']
    },
    {
        product: 'Fish',
        reviews: ['zuu1', 'zuu2', 'zuuu3']
    },
    {
        product: 'Bldck',
        reviews: ['g1', '2d', 'd3']
    },
];

const users = [
    {
        name: 'John',
        password: 'blblb2013'
    },
    {
        name: 'Katerina',
        password: 'kisaKate'
    },
    {
        name: 'Grigor',
        password: 'lavtxa'
    },
];

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(cookieParser);

app.get('/', (req, res) => {
    console.log(req.parsedCookies);
    res.send('Hello World!');
});

app.get('/api/products', (req, res) => res.send(products));
app.get('/api/products/:id', (req, res) => res.send(products[req.params.id] ? products[req.params.id] : "There is no product with such id"));
app.get('/api/products/:id/reviews', (req, res) => res.send(products[req.params.id] ? products[req.params.id].reviews : "There is no product with such id"));
app.post('/api/products', (req, res) => {
    products.push({ product: req.body.product });
    res.send(products[products.length - 1]);
});
app.get('/api/users', (req, res) => res.send(users));

module.exports = app;