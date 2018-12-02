var express = require('express');
var app = express();
//var db = require('./db');



var LightController = require('./light/LightController');
app.use('/lights', LightController);

module.exports = app;