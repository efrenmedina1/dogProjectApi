var router = require('express').Router();
var sequelize = require('../db');
// var CommentsModel = sequelize.import('../models/comments');
var db = require('../db').db;


router.get('/', (req, res) => {
    db.Comment.findAll()
    .then(comments => res.status(200).json(comments))
    .catch(err => res.status(500).json(err))
});

module.exports = router;