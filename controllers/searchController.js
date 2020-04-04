
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


        db.findMany(User, query, projection, function(result) {

            if(result != null) {

                res.render('search', {contents: result});
            }

            else {

                res.render('error');
            }
        });
    }
}

// exports the object `profileController` (defined above)
// when another script exports from this file
module.exports = searchController;
