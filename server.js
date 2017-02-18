const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// mongoose.connect();

require('./config/db.js');

let port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));

app.listen(port);

console.log('Magic happens on PORT ' + port);

require('./app/routes.js')(app);

exports = module.exports = app;