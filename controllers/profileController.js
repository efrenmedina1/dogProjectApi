var router = require('express').Router();
var sequelize = require('../db');
var ProfileModel = sequelize.import('../models/profile');

router.get('/profile', (req, res) => {

    ProfileModel
    .findAll()
    .then(
        function findAllSuccess(data) {
            res.json(data);
        },
        function findAllError(err) {
            res.send(500, err.message);
        }
    );
});

router.post('/profile', (req, res) => {
    var userId = req.user.id;
    var profileData = {
        name: req.body.name,
        age: req.body.age,
        about: req.body.about,
        picture: req.body.picture,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        userId: userId
    }
    ProfileModel
    .create(profileData)
    .then(
        function createSuccess(profileData) {
            res.json({
                profileData: profileData
            });
        },
        function createError(err) {
            res.status(500).send(err.message);
        }
    );
});

// router.get('/profile/:id', (req, res)=> {
//     var data = req.params.id;
//     var userid = req.user.id;

//     ProfileModel
//     .findOne({
//         where: { id: data, userid: userid }
//     }).then(
//         function findOneSuccess(data) {
//             res.json(data);
//         },
//         function findOneError(err) {
//             res.send(500, err.message);
//         }
//     );
// });


router.delete('/profile/:id', (req, res) => {
    ProfileModel
    .destroy({ where: { id: req.params.id} })
    .then(
        function deleteProfileSuccess(data){
            res.send("you deleted a profile");
        },
        function deleteProfileError(err){
            res.send(500, err.message);
        }
    );
})

router.put('/profile/:id', (req, res) => {
    if (!req.errors) {
        ProfileModel.update(req.body, { where: { id: req.params.id }})
        .then(profiledata => res.status(200).json(profiledata))
        .catch(err => res.json(req.errors))
    } else {
      res.status(500).json(req.errors)
    }
  })


module.exports = router;