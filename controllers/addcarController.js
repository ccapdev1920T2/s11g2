
// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const Car = require('../models/CarModel.js');

const addcarController = {


    getAddCar: function (req, res) {
        res.render('addcar');
    },

    postAddCar: function (req, res) {

        var imgLink = req.body.img;
        var name = req.body.name;
        var brand = req.body.brand;
        var carClass = req.body.class;
        var bodyStyle = req.body.bodystyle;
        var capacity = req.body.capacity;
        var price = req.body.price;
        var description = req.body.desc;

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

module.exports = addcarController;
