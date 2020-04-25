
// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const Car = require('../models/CarModel.js');

const addcarController = {


    getAddCar: function (req, res) {

        if(req.session.uName) {

            var details = {

                flag: true,
                uName: req.session.uName

            }
        }

        else {

            var details = {

                flag: false

            }
        }

        res.render('addcar', details);
    },

    postAddCar: function (req, res) {

        var name = req.body.name;
        var brand = req.body.brand;
        var carClass = req.body.class;
        var bodyStyle = req.body.bodystyle;
        var capacity = req.body.capacity;
        var price = req.body.price;
        var description = req.body.desc;
        var imgLink = req.body.img;
        var optionImg = req.body.optionImg;

        db.insertOne(Car, {
            name: name,
            brand: brand,
            carClass: carClass,
            bodyStyle: bodyStyle,
            capacity: capacity,
            price: price,
            description: description,
            imgLink: imgLink,
            optionImg: optionImg
        });

    }

}

module.exports = addcarController;
