
// import module `database` from `../models/db.js`
const db = require('../models/db.js');

const Car = require('../models/CarModel.js');

const updateController = {

    getUpdate: function (req, res) {

        var query = {
            name: req.params.name
        };

        var projection = '';

        db.findOne(Car, query, projection, function(result) {

            if(result != null) {

                var details = {
                    name: result.name,
                    brand: result.brand,
                    carClass: result.carClass,
                    bodyStyle: result.bodyStyle,
                    capacity: result.capacity,
                    price: result.price,
                    description: result.description,
                    imgLink: result.imgLink
                }

                res.render('update', details);
            }

            else {
                // render `../views/error.hbs`
                res.render('error');
            }
        });
    },

    postUpdate: function (req,res) {

        var filter = {
            name: req.body.name
        };

        var update = {
            brand: req.body.brand,
            carClass: req.body.class,
            bodyStyle: req.body.bodyStyle,
            capacity: req.body.capacity,
            price: req.body.price,
            description: req.body.desc,
            imgLink: req.body.img
        }

        db.updateOne(Car, filter, update);
    }
}

module.exports = updateController;
