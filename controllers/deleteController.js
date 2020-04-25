
// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const Car = require('../models/CarModel.js');

const deleteController = {

    getDelete: function (req, res) {

        var query = {};
        var projection = 'name';
        
        db.findMany(Car, query, projection, function(result) {

            if(result != null) {

                if(req.session.uName) {

                    result.flag = true;
                    result.uName = req.session.uName;

                }

                else{

                    result.flag = false;

                }
                
                res.render('delete', {cars: result});
            }

            else {
                res.render('error');
            }
        });
    },

    postDelete: function (req, res) {

        db.deleteOne(Car, {name: req.body.cars});
    }

}

module.exports = deleteController;
