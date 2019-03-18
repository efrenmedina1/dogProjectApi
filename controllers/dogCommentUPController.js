var router = require('express').Router();
var sequelize = require('../db');
var dogCommentUPModel = sequelize.import('../models/dogComment');

router.get('/', (req, res) => {
    var dogId = req.body.dogId;

    dogCommentUPModel
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