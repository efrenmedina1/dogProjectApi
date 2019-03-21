var router = require('express').Router();
var sequelize = require('../db');
// var DogsModel = sequelize.import('../models/dogs');
var db = require('../db').db;


router.get('/', (req, res) => {
    db.Dogs.findAll()
    .then(dogs => res.status(200).json(dogs))
    .catch(err => res.status(500).json(err))
});

module.exports = router;