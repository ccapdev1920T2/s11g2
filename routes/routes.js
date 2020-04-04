
// import module `express`
const express = require('express');

// import module `controller` from `../controllers/controller.js`
const controller = require('../controllers/controller.js');

// import module `signupController` from `../controllers/signupController.js`
const signupController = require('../controllers/signupController.js');

const addcarController = require('../controllers/addcarController.js');

const searchController = require('../controllers/searchController.js');

const homeController = require('../controllers/homeController.js');

const registerController = require('../controllers/registerController.js');

const userController = require('../controllers/userController.js');

const buildController = require('../controllers/buildController.js');

const contactController = require('../controllers/contactController.js');

const app = express();

app.get('/addcar', addcarController.getAddCar);

app.post('/addcar', addcarController.postAddCar);

app.get('/search', searchController.getCars);

app.get('/home', homeController.getHome);

app.get('/register', registerController.getRegister);

app.get('/user', userController.getUser);

app.get('/build', buildController.getBuild);

app.get('/contact', contactController.getContact);

// execute function getIndex()
// defined in object `controller` in `../controllers/controller.js`
// when a client sends an HTTP GET request for `/`
app.get('/', controller.getIndex);

// execute function getSignUp()
// defined in object `signupController` in `../controllers/signupController.js`
// when a client sends an HTTP GET request for `/signup`
app.get('/signup', signupController.getSignUp);

// execute function postSignUp()
// defined in object `signupController` in `../controllers/signupController.js`
// when a client sends an HTTP POST request for `/signup`
app.post('/signup', signupController.postSignUp);

// exports the object `app` (defined above)
// when another script exports from this file
module.exports = app;
