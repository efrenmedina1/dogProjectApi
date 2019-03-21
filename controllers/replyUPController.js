var router = require('express').Router();
var sequelize = require('../db');
// var ReplyUPModel = sequelize.import('../models/reply');
var db = require('../db').db;


router.get('/:id', (req, res) => {
    var commentid = req.params.id;

    db.Reply
    .findAll({
        where: { commentId: commentid }
    })
    .then(
        function findAllSuccess(data) {
            res.json(data);
        },
        function findAllError(err) {
            res.send(500, err.message);
        }
    );
});

module.exports = router;