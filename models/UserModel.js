
// import module `mongoose`
var mongoose = require('mongoose');

// defines the schema for collection `users`
var UserSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    uName: {
        type: String,
        required: true
    },
    pw: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    bDay: {
        type: Date,
        required: true
    },
    //credit card
    ccNo: {
        type: Number,
        required: true
    },
    ccExp: {
        type: Date,
        required: true
    },
    ccPin: {
        type: Number,
        required: true
    },
    //license 
    fileId: { 
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    expDate: {
        type: Date,
        required: true
    }

});

// exports a mongoose.model object based on `UserSchema` (defined above)
// when another script exports from this file
// This model executes CRUD operations
// to collection `users` -> plural of the argument `User`
module.exports = mongoose.model('User', UserSchema);
