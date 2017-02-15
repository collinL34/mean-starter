const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const db = require('./config/db.js');

let port = process.env.PORT || 8080;

// mongoose.connect();

app.use(bodyParser.json());
app.use(express.static(__dirname + './public'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

require('./app/routes')(app);

app.listen(port);

console.log('Magic happens at Port ' + port);

exports = module.exports = app;