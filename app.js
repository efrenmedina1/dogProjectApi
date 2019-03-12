require('dotenv').config();

var express = require('express');
var app = express();

var user = require('./controllers/userController');
var sequelize = require('./db');
var bodyParser = require('body-parser');

sequelize.sync();
app.use(bodyParser.json());

//EXPOSED ROUTES//
app.use('/dogs', user);

app.listen(3000, function(){
    console.log('!!! RED_ROCKET 3000 !!!')
})