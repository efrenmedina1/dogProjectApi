var router = require('express').Router();
var sequelize = require('../db');
var DogsModel = sequelize.import('../models/dogs');

router.get('/', (req, res) => {
    DogsModel.findAll()
    .then(dogs => res.status(200).json(dogs))
    .catch(err => res.status(500).json(err))
});

module.exports = router;