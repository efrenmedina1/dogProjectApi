var router = require('express').Router();
var db = require('../db').db;

// post
router.post('/:dogid', (req, res) => {
    var userid = req.body.id;
    var likedata = {
        userid: userid,
        dogid : req.params.dogid
    }
    db.Likes
    .create(likedata)
    .then(
        function createSuccess(dogData) {
            res.json({
                dogData: dogData
            });
        },
        function createError(err) {
            res.status(500).send(err.message);
        }
    );
});
// get by id 
router.get('/:id', (req, res) => {
    var userid = req.params.id;

    db.Likes
    .findAll({
        where: { userid: userid },
        include: [
            {model: db.Dogs}
        ]
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

// put
router.put('/:id', (req, res) => {
    if (!req.errors) {
        db.Likes.update(req.body, { where: { id: req.params.id }})
        .then(dogdata => res.status(200).json(dogdata))
        .catch(err => res.json(req.errors))
    } else {
      res.status(500).json(req.errors)
    }
  })


module.exports = router;