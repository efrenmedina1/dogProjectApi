var router = require('express').Router();
var sequelize = require('../db');
// var DogCoModel = sequelize.import('../models/dogComment');
var db = require('../db').db;


router.post('/', (req, res) => {
    var userId = req.user.id;
    var dogId = req.body.dogId;
    var replyData = {
        comment: req.body.comment,
        dogId: dogId,
        userId: userId,
        
    }
    db.Dogcomment
    .create(replyData)
    .then(
        function createSuccess(Data) {
            res.json({
                Data: Data
            });
        },
        function createError(err) {
            res.status(500).send(err.message);
        }
    );
});

router.get('/:id', (req, res)=> {
    var data = req.params.id;
    var userid = req.user.id;

    db.Dogcomment
    .findOne({
        where: { id: data, userId: userid }
    }).then(
        function findOneSuccess(data) {
            res.json(data);
        },
        function findOneError(err) {
            res.send(500, err.message);
        }
    );
});

router.delete('/:id', (req, res) => {
    var data = req.params.id;
    var userid = req.user.id;

    db.Dogcomment
    .destroy({
        where: {id: data, userId: userid}
    }).then(
        function deleteDogSuccess(data){
            res.send("you deleted a dog comment");
        },
        function deleteDogError(err){
            res.send(500, err.message);
        }
    );
});

router.put('/:id', (req, res) => {
    if (!req.errors) {
        db.Dogcomment.update(req.body, { where: { id: req.params.id }})
        .then(data => res.status(200).json(data))
        .catch(err => res.json(req.errors))
    } else {
      res.status(500).json(req.errors)
    }
  })

module.exports = router;
