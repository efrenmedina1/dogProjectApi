require('dotenv').config();

var express = require('express');
var app = express();
var dogs = require('./controllers/dogsController');
var doglist = require('./controllers/doglistController');
var profilelist = require('./controllers/profilelistController');
var profile = require('./controllers/profileController');
var comments = require('./controllers/commentsController');

var user = require('./controllers/userController');
var sequelize = require('./db');
var bodyParser = require('body-parser');

sequelize.sync();
app.use(bodyParser.json());
app.use(require('./middleware/headers'));

//EXPOSED ROUTES//
app.use('/dogs', user);
app.use('/dogs', doglist);
app.use('/dogs', profilelist)

//PROTECTED ROUTES//
app.use(require('./middleware/validate-session'));
app.use('/dogs', dogs);
app.use('/dogs', profile);
app.use('/dogs', comments);


app.listen(3000, function(){
    console.log('!!! RED_ROCKET 3000 !!!')
})