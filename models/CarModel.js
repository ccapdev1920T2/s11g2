
// import module `mongoose`
var mongoose = require('mongoose');

// defines the schema for collection `users`
var CarSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    carClass: {
        type: String,
        required: true
    },
    bodyStyle: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imgLink: {
        type: String,
        required: true
    }

});

// exports a mongoose.model object based on `CarSchema` (defined above)
// when another script exports from this file
// This model executes CRUD operations
// to collection `cars` -> plural of the argument `Car`
module.exports = mongoose.model('Car', CarSchema);
