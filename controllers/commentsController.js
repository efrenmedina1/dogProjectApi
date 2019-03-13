var router = require('express').Router();
var sequelize = require('../db');
var CommentsModel = sequelize.import('../models/comments');

router.get('/comments', (req, res) => {
    CommentsModel
    .findAll()
    .then(
        function findAllSuccess(comments) {
            res.json(comments);
        },
        function findAllError(err) {
            res.send(500, err.message);
        }
    );
});

router.get('/comments/:id', (req, res)=> {
    var data = req.params.id;
    
    CommentsModel
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
// router.get('/comments', (req, res) => {
//     var userid = req.user.id;

//     CommentsModel
//     .findAll({
//         where: { userId: userid }
//     })
//     .then(
//         function findAllSuccess(comments) {
//             res.json(comments);
//         },
//         function findAllError(err) {
//             res.send(500, err.message);
//         }
//     );
// });


router.post('/comments', (req, res) => {
    var userId = req.user.id;
    var commentData = {
        description: req.body.description,
        userId: userId
    }
    CommentsModel
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


router.delete('/comments/:id', (req, res) => {
    CommentsModel
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

router.put('/comments/:id', (req, res) => {
    if (!req.errors) {
        CommentsModel.update(req.body, { where: { id: req.params.id }})
        .then(commentdata => res.status(200).json(commentdata))
        .catch(err => res.json(req.errors))
    } else {
      res.status(500).json(req.errors)
    }
  })


module.exports = router;
