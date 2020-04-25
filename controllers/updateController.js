
// import module `database` from `../models/db.js`
const db = require('../models/db.js');

const { validationResult } = require('express-validator');

const Car = require('../models/CarModel.js');

const updateController = {

    getUpdate: function (req, res) {

        var query = {
            name: req.params.name
        };

        var projection = '';

        db.findOne(Car, query, projection, function(result) {

            if(result != null) {

                if(req.session.uName) {

                    var car = {
                        name: result.name,
                        brand: result.brand,
                        carClass: result.carClass,
                        bodyStyle: result.bodyStyle,
                        capacity: result.capacity,
                        price: result.price,
                        description: result.description,
                        imgLink: result.imgLink,
                        optionImg: result.optionImg
                    }

                    car.flag = true;
                    car.uName = req.session.uName;

                }

                else{

                    var car = {
                        name: result.name,
                        brand: result.brand,
                        carClass: result.carClass,
                        bodyStyle: result.bodyStyle,
                        capacity: result.capacity,
                        price: result.price,
                        description: result.description,
                        imgLink: result.imgLink,
                        optionImg: result.optionImg
                    }

                    car.flag = false;

                }

                

                res.render('update', car);
            }

            else {
                // render `../views/error.hbs`
                res.render('error');
            }
        });
    },

    postUpdate: function (req,res) {

        var errors = validationResult(req);

        if(!errors.isEmpty()) {

            errors = errors.errors;

            var details = {};

            for(i = 0; i < errors.length; i++) {

                details[errors[i].param + 'Error'] = errors[i].msg;

            }

            res.render('update', details);

        }
        else{

            var filter = {
                name: req.body.name
            };

            var update = {
                brand: req.body.brand,
                carClass: req.body.class,
                bodyStyle: req.body.bodyStyle,
                capacity: req.body.capacity,
                price: req.body.price,
                description: req.body.description,
                imgLink: req.body.imgLink,
                optionImg: req.body.optionImg
            }

            db.updateOne(Car, filter, update, function(flag) {

                if(flag) {

                    res.redirect('/user/' + req.session.uName);

                }
            });
        }
    }


}

module.exports = updateController;
