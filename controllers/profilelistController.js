var router = require('express').Router();
var sequelize = require('../db');
// var User = sequelize.import('..models/user');
var ProfileModel = sequelize.import('../models/profile');

router.get('/profilelist', (req, res) => {
    ProfileModel.findAll()
    .then(profiles => res.status(200).json(profiles))
    .catch(err => res.status(500).json(err))
});

module.exports = router;