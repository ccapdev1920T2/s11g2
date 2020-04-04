/*
    LAST EDITED: APRIL 4, 2020
    CCAPDEV S11 GROUP 2
    VIRTUS ET SCIENTIA
*/

/* Import Modules Here */
const express = require('express');
const hbs = require('hbs');
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

/* ROUTING */
app.use('/', routes);

/* DATABASE */
db.connect();

/* 404 FILE NOT FOUND */
app.use(function(req, res, next) {
    res.status(404).send('File is not in the server!');
});

/* PARTIALS */
hbs.registerPartials(__dirname + '/views/partials');

/* Listeners */
app.listen(port, function() {
    console.log('App listening at port ' + port);
});