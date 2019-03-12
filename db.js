const Sequelize = require('sequelize');

const sequelize = new Sequelize('dogprojectapi', 'postgres', 'AllElite', {
    host: 'localhost',
    dialect: 'postgres'

});

sequelize.authenticate()
.then(
    function () {
        console.log('Connected to dogprojectapi postgres database');
    },
    function (Err) {
        console.log(err);
    }
);

module.exports =sequelize;

// // // Associations
// const db = {};

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// db.User = require('./models/user')(sequelize, Sequelize);
// db.Dogs = require('./models/dogs')(sequelize, Sequelize);
// db.Profile = require('./models/profile')(sequelize, Sequelize);
// db.Comments = require('./models/comments')(sequelize, Sequelize);

// db.Dogs.belongsTo(db.User);
// db.User.hasMany(db.Dogs);
// db.Comments.belongsTo(db.User);
// db.User.hasMany(db.Comments);
// db.Comments.belongsTo(db.Dogs);
// db.Dogs.hasMany(db.Comments);
// db.Comments.belongsTo(db.Profile);
// db.Profile.hasMany(db.Comments);
// db.Profile.belongsTo(db.User);
// db.User.hasMany(db.Profile);

// module.exports = {
//     db: db,
//     sequelize: sequelize
// };