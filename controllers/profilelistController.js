var router = require('express').Router();
var sequelize = require('../db');
// var ProfileModel = sequelize.import('../models/profile');
var db = require('../db').db;


router.get('/', (req, res) => {
    db.Profile.findAll()
    .then(profiles => res.status(200).json(profiles))
    .catch(err => res.status(500).json(err))
});

module.exports = router;