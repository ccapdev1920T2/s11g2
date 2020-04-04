
// import module `database` from `../models/db.js`
const db = require('../models/db.js');

const Car = require('../models/CarModel.js');

// defines an object which contains functions executed as callback
// when a client requests for `profile` paths in the server
const buildController = {

    // executed when the client sends an HTTP GET request `/profile/:idNum`
    // as defined in `../routes/routes.js`
    getBuild: function (req, res) {

        var query = {name: req.params.name};
        var projection = {};

        db.findOne(Car, query, projection, function(result) {

            if(result != null) {
                res.render('build', result);
            }

            else {
                res.render('error');
            }

        });

        
    }
}

// exports the object `profileController` (defined above)
// when another script exports from this file
module.exports = buildController;
