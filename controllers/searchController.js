
// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('../models/CarModel.js');

// defines an object which contains functions executed as callback
// when a client requests for `profile` paths in the server
const searchController = {

    // executed when the client sends an HTTP GET request `/profile/:idNum`
    // as defined in `../routes/routes.js`
    getCars: function (req, res) {

        var query = {};
        var projection = {};
        var mySort = {}


        db.findMany(User, query, projection, function(result) {

            if(result != null) {

                if(req.session.uName) {

                    result.flag = true;
                    result.uName = req.session.uName;

                }

                else{

                    result.flag = false;

                }

                res.render('search', {contents: result});
            }

            else {

                res.render('error');
            }
        }, mySort);
    },

    getCarsByName: function (req, res) {

        var query = {};
        var projection = {};
        var mySort = {name: 1}


        db.findMany(User, query, projection, function(result) {

            if(result != null) {

                if(req.session.uName) {

                    result.flag = true;
                    result.uName = req.session.uName;

                }

                else{

                    result.flag = false;

                }

                res.render('search', {contents: result});
            }

            else {

                res.render('error');
            }
        }, mySort);
    },

    getCarsByPrice: function (req, res) {

        var query = {};
        var projection = {};
        var mySort = {price: 1}


        db.findMany(User, query, projection, function(result) {

            if(result != null) {

                if(req.session.uName) {

                    result.flag = true;
                    result.uName = req.session.uName;

                }

                else{

                    result.flag = false;

                }

                res.render('search', {contents: result});
            }

            else {

                res.render('error');
            }
        }, mySort);
    },

    getCarsByBrand: function (req, res) {

        var query = {};
        var projection = {};
        var mySort = {brand: 1}


        db.findMany(User, query, projection, function(result) {

            if(result != null) {

                if(req.session.uName) {

                    result.flag = true;
                    result.uName = req.session.uName;

                }

                else{

                    result.flag = false;

                }

                res.render('search', {contents: result});
            }

            else {

                res.render('error');
            }
        }, mySort);
    }


}

// exports the object `profileController` (defined above)
// when another script exports from this file
module.exports = searchController;
