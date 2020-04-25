
// import module `express`
const express = require('express');

const addcarController = require('../controllers/addcarController.js');

const searchController = require('../controllers/searchController.js');

const homeController = require('../controllers/homeController.js');

const registerController = require('../controllers/registerController.js');

const userController = require('../controllers/userController.js');

const buildController = require('../controllers/buildController.js');

const contactController = require('../controllers/contactController.js');

const deleteController = require('../controllers/deleteController.js');

const updateController = require('../controllers/updateController.js');

const chooseUpdateController = require('../controllers/chooseUpdateController.js');

const logoutController = require('../controllers/logoutController.js');

const validation = require('../helpers/validation.js');

const app = express();


app.get('/search', searchController.getCars);

app.get('/search/name', searchController.getCarsByName);

app.get('/search/price', searchController.getCarsByPrice);

app.get('/search/brand', searchController.getCarsByBrand);

app.get('/', homeController.getHome);

app.get('/home', homeController.getHome);

app.post('/', homeController.postLogin);

app.post('/home', homeController.postLogin);

app.get('/register', registerController.getRegister);

app.post('/register', validation.registerValidation(), registerController.postRegister);

app.get('/addcar', addcarController.getAddCar);

app.post('/addcar', validation.addCarValidation(), addcarController.postAddCar);

app.get('/getCheckUsername', registerController.getCheckUsername);

app.get('/user/:uName', userController.getUser);

app.get('/build/:name', buildController.getBuild);

app.get('/contact', contactController.getContact);

app.get('/delete', deleteController.getDelete);

app.post('/delete', deleteController.postDelete);

app.get('/update/:name', updateController.getUpdate);

app.post('/update/:name', updateController.postUpdate);

app.get('/chooseUpdate', chooseUpdateController.getChoose);

app.post('/chooseUpdate', chooseUpdateController.postChoose);

app.get('/logout', logoutController.getLogOut);


// exports the object `app` (defined above)
// when another script exports from this file
module.exports = app;
