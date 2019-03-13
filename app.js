require('dotenv').config();

var express = require('express');
var app = express();
var dogs = require('./controllers/dogsController');
var doglist = require('./controllers/doglistController');
var profilelist = require('./controllers/profilelistController');
var profile = require('./controllers/profileController');
var comments = require('./controllers/commentsController');
var commentslist = require('./controllers/commentslistController');

var user = require('./controllers/userController');
var sequelize = require('./db');
var bodyParser = require('body-parser');

sequelize.sync();
app.use(bodyParser.json());
app.use(require('./middleware/headers'));

//EXPOSED ROUTES//
app.use('/user', user);
app.use('/doglist', doglist);
app.use('/profilelist', profilelist);
app.use('/commentslist', commentslist);

//PROTECTED ROUTES//
app.use(require('./middleware/validate-session'));
app.use('/dogs', dogs);
app.use('/profile', profile);
app.use('/comments', comments);


app.listen(3000, function(){
    console.log('!!! RED_ROCKET 3000 !!!')
})