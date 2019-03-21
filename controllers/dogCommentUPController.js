var router = require('express').Router();
var sequelize = require('../db');
// var dogCommentUPModel = sequelize.import('../models/dogComment');
var db = require('../db').db;


router.get('/:id', (req, res) => {
    var dogId = req.params.id;

    db.Dogcomment
    .findAll({
        where: { dogId: dogId }
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