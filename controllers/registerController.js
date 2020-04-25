
// import module `database` from `../models/db.js`
const db = require('../models/db.js');

const { validationResult } = require('express-validator');

const bcrypt = require('bcrypt');
const saltRounds = 10;

// import module `User` from `../models/UserModel.js`
const User = require('../models/UserModel.js');

// defines an object which contains functions executed as callback
// when a client requests for `signup` paths in the server
const signupController = {

    // executed when the client sends an HTTP GET request `/signup`
    // as defined in `../routes/routes.js`
    getRegister: function (req, res) {

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

        res.render('register', details);
    },

    // executed when the client sends an HTTP POST request `/signup`
    // as defined in `../routes/routes.js`
    postRegister: function (req, res) {

        var errors = validationResult(req);

        if(!errors.isEmpty()) {

            errors = errors.errors;

            var details = {};

            for(i = 0; i < errors.length; i++) {

                details[errors[i].param + 'Error'] = errors[i].msg;

            }

            res.render('register', details);

        }

        else {

            // when submitting forms using HTTP POST method
            // the values in the input fields are stored in the req.body object
            // each <input> element is identified using its `name` attribute
            // Example: the value entered in <input type="text" name="fName">
            // can be retrieved using req.body.fName
            var fName = req.body.fname;
            var lName = req.body.lname;
            var uName = req.body.username;
            var pw = req.body.pw;
            var email = req.body.email;
            var bDay = req.body.bDay;
            //credit card
            var ccNo = req.body.ccNo;
            var ccExp = req.body.ccExp;
            var ccPin = req.body.ccPin;
            //license
            var fileId = req.body.dlNo;
            var startDate = req.body.dlStart;
            var expDate = req.body.dlExp;

            bcrypt.hash(pw, saltRounds, function(err, hash) {

                var user = {

                    fName: fName,
                    lName: lName,
                    uName: uName,
                    pw: hash,
                    email: email,
                    bDay: bDay,
                    //credit card
                    ccNo: ccNo,
                    ccExp: ccExp,
                    ccPin: ccPin,
                    //license
                    fileId: fileId,
                    startDate: startDate,
                    expDate: expDate
    
                }
    
                // calls the function insertOne()
                // defined in the `database` object in `../models/db.js`
                // this function adds a document to collection `users`
                db.insertOne(User, user, function(flag) {
    
                    if (flag) {
    
                        // upon adding a user to the database,
                        // redirects the client to `/success` using HTTP GET,
                        // defined in `../routes/routes.js`
                        // passing values using URL
                        // which calls getSuccess() method defined in `./successController.js`
                        res.redirect('/user/' + uName);
    
                    }
                });
            });
        }
    },


        /*
        executed when the client sends an HTTP GET request `/getCheckID`
        as defined in `../routes/routes.js`
    */
    getCheckUsername: function (req, res) {

        /*
            when passing values using HTTP GET method
            the values are stored in the req.query object
            Example url: `http://localhost/getCheckID?uName=11312345`
            To retrieve the value of parameter `uName`: req.query.uName
        */
        var query = {uName: req.query.uName};
        var projection = 'uName';

        /*
            calls the function findOne()
            defined in the `database` object in `../models/db.js`
            searches for a single document based on the model `User`
            sends an empty string to the user if there are no match
            otherwise, sends an object containing the uName
        */
        db.findOne(User, query, projection, function(result) {

            res.send(result);

        });
    }

}

// exports the object `signupController` (defined above)
// when another script exports from this file
module.exports = signupController;
