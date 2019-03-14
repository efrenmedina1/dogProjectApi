var router = require('express').Router();
var sequelize = require('../db');
var DogsModel = sequelize.import('../models/dogs');

router.get('/', (req, res) => {
    var userid = req.user.id;

    DogsModel
    .findAll({
        where: { userId: userid }
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

router.post('/', (req, res) => {
    var userId = req.user.id;
    var dogData = {
        breed: req.body.breed,
        name: req.body.name,
        age: req.body.age,
        picture: req.body.picture,
        description: req.body.description,
        userId: userId
    }
    DogsModel
    .create(dogData)
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

router.get('/:id', (req, res)=> {
    var data = req.params.id;
    var userid = req.user.id;

    DogsModel
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

    DogsModel
    .destroy({
        where: {id: data, userId: userid}
    }).then(
        function deleteDogSuccess(data){
            res.send("you deleted a dog");
        },
        function deleteDogError(err){
            res.send(500, err.message);
        }
    );
});

router.put('/:id', (req, res) => {
    if (!req.errors) {
        DogsModel.update(req.body, { where: { id: req.params.id }})
        .then(dogdata => res.status(200).json(dogdata))
        .catch(err => res.json(req.errors))
    } else {
      res.status(500).json(req.errors)
    }
  })


module.exports = router;