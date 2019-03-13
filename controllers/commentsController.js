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

//POST A DOG FOR A USER//
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

module.exports = router;
