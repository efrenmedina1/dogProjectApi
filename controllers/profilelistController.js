var router = require('express').Router();
var sequelize = require('../db');
var ProfileModel = sequelize.import('../models/profile');

router.get('/', (req, res) => {
    ProfileModel.findAll()
    .then(profiles => res.status(200).json(profiles))
    .catch(err => res.status(500).json(err))
});

module.exports = router;