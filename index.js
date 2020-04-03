/*
    LAST EDITED: APRIL 1, 2020
    CCAPDEV S11 GROUP 2
    VIRTUS ET SCIENTIA
*/

/* Import Modules Here */
const express = require('express');
const hbs = require('hbs');
const db = require('./models/db.js');

/* Port */
const app = express();
const port = 3000;

const routes = require('./routes/routes.js');

db.connect();

/* View Engine */
app.set('view engine', 'hbs');

/* Routing */

/* HOME PAGE */
app.get('/', function(req, res) {
    res.render('home');
});

/* USER PAGE */
app.get('/user', function(req, res) {
    res.render('user');
});

/* BUILD PAGE */
app.get('/build', function(req, res) {
    res.render('build');
});

/* CONTACT PAGE */
app.get('/contact', function(req, res) {
    res.render('contact');
});

/* REGISTER PAGE */
app.get('/register', function(req, res) {
    res.render('register');
});

/* SEARCH PAGE */
app.get('/search', function(req, res) {
    res.render('search');
});

/* Functions */

/* ACCESS STATIC FILES */
app.use(express.static('public'));

app.use('/', routes);
app.use(express.urlencoded({extended: true}));

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