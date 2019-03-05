var mongoose = require('mongoose');

let personSchema = mongoose.Schema({
    name: String,
    age: Number,
    nationality: String
});

module.exports = mongoose.model('Person', personSchema, 'test');