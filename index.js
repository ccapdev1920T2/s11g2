/*
    LAST EDITED: APRIL 4, 2020
    CCAPDEV S11 GROUP 2
    VIRTUS ET SCIENTIA
*/

/* Import Modules Here */
const express = require('express');
const hbs = require('hbs');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const db = require('./models/db.js');
const routes = require('./routes/routes.js');

/* Port */
const app = express();
const port = 3000;

/* View Engine */
app.set('view engine', 'hbs');

/* Functions */
app.use(express.urlencoded({extended: true}));

/* ACCESS STATIC FILES */
app.use(express.static('public'));

app.use(session({
    'secret': 's11g2',
    'resave': false,
    'saveUninitialized': false,
    store: new MongoStore({mongooseConnection: mongoose.connection})
}));

/* ROUTING */
app.use('/', routes);

/* DATABASE */
db.connect();

/* 404 FILE NOT FOUND */
app.use(function(req, res, next) {
    var details = {};

    /*
        checks if a user is logged-in by checking the session data
        if a user is logged-in,
        display the profile tab and logout tab in the nav bar.
    */
   
    if(req.session.uName) {
        details.flag = true;
        details.uName = req.session.uName;
    }

    /*
        if no user is logged-in,
        do not display the profile tab and the logout tab in the nav bar.
    */
    else
        details.flag = false;

        res.render('home', details);
});

/* PARTIALS */
hbs.registerPartials(__dirname + '/views/partials');

/* HELPERS */
hbs.registerHelper('if_eq', function(a, b, opts) {
    if (a == b) {
        return opts.fn(this);
    } else {
        return opts.inverse(this);
    }
});

/* Listeners */
app.listen(port, function() {
    console.log('App listening at port ' + port);
});