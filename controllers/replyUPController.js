var router = require('express').Router();
var sequelize = require('../db');
var ReplyUPModel = sequelize.import('../models/reply');

router.get('/', (req, res) => {
    var commentid = req.body.commentId;

    ReplyUPModel
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