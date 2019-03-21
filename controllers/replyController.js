var router = require('express').Router();
var sequelize = require('../db');
// var ReplyModel = sequelize.import('../models/reply');
var db = require('../db').db;


router.post('/', (req, res) => {
    var userId = req.user.id;
    var commentId = req.body.commentId;
    var replyData = {
        comment: req.body.comment,
        commentId: commentId,
        userId: userId,
        
    }
    db.Reply
    .create(replyData)
    .then(
        function createSuccess(replyData) {
            res.json({
                replyData: replyData
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

    db.Reply
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

    db.Reply
    .destroy({
        where: {id: data, userId: userid}
    }).then(
        function deleteDogSuccess(data){
            res.send("you deleted a reply");
        },
        function deleteDogError(err){
            res.send(500, err.message);
        }
    );
});

router.put('/:id', (req, res) => {
    if (!req.errors) {
        db.Reply.update(req.body, { where: { id: req.params.id }})
        .then(replydata => res.status(200).json(replydata))
        .catch(err => res.json(req.errors))
    } else {
      res.status(500).json(req.errors)
    }
  })

module.exports = router;
