
// import module `database` from `../models/db.js`
const db = require('../models/db.js');

const bcrypt = require('bcrypt');

const User = require('../models/UserModel.js');

// defines an object which contains functions executed as callback
// when a client requests for `profile` paths in the server
const homeController = {

    // executed when the client sends an HTTP GET request `/profile/:idNum`
    // as defined in `../routes/routes.js`
    getHome: function (req, res) {

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
        
        res.render('home', details);
        
    },

    postLogin: function(req, res) {

        var username = req.body.username;
        var pw = req.body.pw;

        db.findOne(User, {uName: username}, '', function(result) {

            if(result) {

                var user = {

                    fName: result.fName,
                    lName: result.lName,
                    uName: result.uName

                }

                bcrypt.compare(pw, result.pw, function(err, equal) {

                    if(equal) {

                        req.session.uName = user.uName;

                        res.redirect('/user/' + user.uName);

                    }

                    else {

                        var details = {flag: false, error: 'ID Number and/or Password is incorrect.'};
                        res.render('home', details);

                    }
                })
            }

            else {

                var details = {flag: false, error: 'ID Number and/or Password is incorrect.'};
                res.render('home', details);

            }
        });
    }
}

// exports the object `profileController` (defined above)
// when another script exports from this file
module.exports = homeController;
