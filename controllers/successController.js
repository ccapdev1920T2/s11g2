
// defines an object which contains functions executed as callback
// when a client requests for `success` paths in the server
const successController = {

    // executed when the client sends an HTTP GET request `/success`
    // as defined in `../routes/routes.js`
    getSuccess: function (req, res) {

        // when passing values using HTTP GET method
        // the values are stored in the req.query object
        // Example url: `http://localhost/success?fName=A&lName=B&uName=123`
        // To retrieve the value of parameter `fName`: req.query.fName
        var details = {
            fName: req.query.fName,
            lName: req.query.lName,
            uName: req.query.uName
        };

        // render `../views/success.hbs`
        res.render('success', details);
    }

}

// exports the object `successController` (defined above)
// when another script exports from this file
module.exports = successController;
