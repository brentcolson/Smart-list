// @flow
var express = require('express');
var bodyParser = require('body-parser');
// Write index route after starting web dev.
var sequelize = require('./db/config.js');
var index = require('./routes/index.js');
var users = require('./routes/users.js');
var items = require('./routes/items.js');

var app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/', index);
app.use('/users', users);
app.use('/items', items);

// default route
app.use('/*', function (req, res) {
  res.status(404).send('nonono....');
});

module.exports = app;
