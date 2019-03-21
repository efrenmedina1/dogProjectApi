var router = require('express').Router();
var sequelize = require('../db');
// var CommentsModel = sequelize.import('../models/comments');
var db = require('../db').db;


router.get('/', (req, res) => {
    var userid = req.user.id;

    db.Comment
    .findAll({
        where: {userId: userid}
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

router.get('/:id', (req, res)=> {
    var data = req.params.id;
    
    db.Comment
    .findOne({
        where: { id: data }
    }).then(
        function findOneSuccess(data) {
            res.json(data);
        },
        function findOneError(err) {
            res.send(500, err.message);
        }
    );
});

router.post('/', (req, res) => {
    var userId = req.user.id;
    var commentData = {
        description: req.body.description, 
        userId: userId,
        username: req.body.username
    }
    db.Comment
    .create(commentData)
    .then(
        function createSuccess(commentData) {
            res.json({
                commentData: commentData
            });
        },
        function createError(err) {
            res.status(500).send(err.message);
        }
    );
});

router.delete('/:id', (req, res) => {
    db.Comment
    .destroy({ where: { id: req.params.id} })
    .then(
        function deleteCommentSuccess(data){
            res.send("you deleted a comment");
        },
        function deleteCommentError(err){
            res.send(500, err.message);
        }
    );
})

router.put('/:id', (req, res) => {
    if (!req.errors) {
        db.Comment.update(req.body, { where: { id: req.params.id }})
        .then(commentdata => res.status(200).json(commentdata))
        .catch(err => res.json(req.errors))
    } else {
      res.status(500).json(req.errors)
    }
  })


module.exports = router;
