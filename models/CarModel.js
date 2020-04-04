
// import module `mongoose`
var mongoose = require('mongoose');

// defines the schema for collection `cars`
var CarSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        required: true
    },
    brand: {
        type: String,
        minlength: 3,
        required: true
    },
    carClass: {
        type: String,
        required: true
    },
    bodyStyle: {
        type: String,
        minlength: 3,
        required: true
    },
    capacity: {
        type: Number,
        min: 2,
        required: true
    },
    price: {
        type: Number,
        min: 0,
        required: true
    },
    description: {
        type: String,
        minlength: 3,
        required: true
    },
    imgLink: {
        type: String,
        minlength: 3,
        required: true
    },
    optionImg: {
        type: String,
        minlength: 3,
        required: true
    }

});

// exports a mongoose.model object based on `CarSchema` (defined above)
// when another script exports from this file
// This model executes CRUD operations
// to collection `cars` -> plural of the argument `Car`
module.exports = mongoose.model('Car', CarSchema);
