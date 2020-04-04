
// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const Car = require('../models/CarModel.js');

const chooseUpdateController = {

    getChoose: function (req, res) {
        var query = {};
        var projection = 'name';
        
        db.findMany(Car, query, projection, function(result) {

            if(result != null) {
                
                res.render('chooseUpdate', {cars: result});
            }

            else {
                res.render('error');
            }
        });
    },

    postChoose: function (req, res) {

        var car = req.body.cars

        res.redirect('update/' + car);
    }

}

module.exports = chooseUpdateController;
