var router = require('express').Router();
var sequelize = require('../db');
// var User = sequelize.import('..models/user');
var CommentsModel = sequelize.import('../models/comments');

router.get('/', (req, res) => {
    CommentsModel.findAll()
    .then(comments => res.status(200).json(comments))
    .catch(err => res.status(500).json(err))
});

module.exports = router;