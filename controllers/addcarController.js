
// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const Car = require('../models/CarModel.js');

const addcarController = {


    getAddCar: function (req, res) {
        res.render('addcar');
    },

    postAddCar: function (req, res) {

        /*
            when submitting forms using HTTP POST method
            the values in the input fields are stored in the req.body object
            each <input> element is identified using its `name` attribute
            Example: the value entered in <input type="text" name="fName">
            can be retrieved using req.body.fName
        */
        var imgLink = req.body.img;
        var name = req.body.name;
        var brand = req.body.brand;
        var carClass = req.body.class;
        var bodyStyle = req.body.bodystyle;
        var capacity = req.body.capacity;
        var price = req.body.price;
        var description = req.body.desc;

        /*
            calls the function insertOne()
            defined in the `database` object in `../models/db.js`
            this function adds a document to collection `users`
        */
        db.insertOne(Car, {
            name: name,
            brand: brand,
            carClass: carClass,
            bodyStyle: bodyStyle,
            capacity: capacity,
            price: price,
            description: description,
            imgLink: imgLink
        });


    }

}

module.exports = signupController;
