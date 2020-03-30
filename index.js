/* Importing Modules */
const express = require('express');

/* Express */
const app = express();
const port = 3030;

/* Default Path */
app.get('/', function(req, res) {
	res.send('Hello World!');
});

app.get('/homepage', function(req, res) {
	res.sendFile(__dirname + "/static/index.html");
});

/* Static File Function */
app.use('static', express.static('files'));

/* 404 Error Function */
app.use(function(req, res, next) {
	res.status(404).send("The file is not in server!");
});

/* Listening Port */
app.listen(port, function() {
	console.log('App listening at port ' + port);
});