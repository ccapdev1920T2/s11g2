
// import module `database` from `../models/db.js`
const db = require('../models/db.js');

const { validationResult } = require('express-validator');

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

    	var errors = validationResult(req);

    	if(!errors.isEmpty()) {

            errors = errors.errors;

            var details = {};

            for(i = 0; i < errors.length; i++) {

                details[errors[i].param + 'Error'] = errors[i].msg;

            }

            res.render('addcar', details);

        }


        else{

        	var name = req.body.name;
	        var brand = req.body.brand;
	        var carClass = req.body.class;
	        var bodyStyle = req.body.bodyStyle;
	        var capacity = req.body.capacity;
	        var price = req.body.price;
	        var description = req.body.description;
	        var imgLink = req.body.imgLink;
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
	        }, function(flag) {

	            if(flag) {

	                res.redirect('/user/' + req.session.uName);

	            }
	        });

        }

        

    }

}

module.exports = addcarController;
