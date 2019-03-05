const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const query = require('../mongo/query');

let Person = require('../models/person');

mongoose.connect('mongodb://localhost:27017/my_db', { useNewUrlParser: true });

router.get('/', (req, res, next) => {
    query.findAll(Person)
    .then((people) => {
        res.send(people);
    })
    .catch((err) => {
        res.send(err);
    });
}); 

router.get('/person/:id', (req, res) => {
    const id = req.params.id;
    const term = {
        _id: id
    }
    
    query.findOne(Person, term)
    .then(person => res.send(person))
    .catch(err => res.send(err));
}); 

router.post('/person', (req, res) => {
    let data = req.body;
    let person = new Person(data);

    query.add(person)
    .then(res.send('saved'))
    .catch(err => res.send(err));
});

module.exports = router;