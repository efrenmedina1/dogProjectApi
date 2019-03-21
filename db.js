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


// Associations
const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./models/user')(sequelize, Sequelize);
db.Dogs = require('./models/dogs')(sequelize, Sequelize);
db.Likes = require('./models/likes')(sequelize, Sequelize);
db.Profile = require('./models/profile')(sequelize, Sequelize);
db.Comment = require('./models/comments')(sequelize, Sequelize);
db.Reply = require('./models/reply')(sequelize, Sequelize);
db.Dogcomment = require('./models/dogComment')(sequelize, Sequelize);

db.Likes.belongsTo(db.Dogs, {onDelete: 'cascade' });
db.Dogs.hasMany(db.Likes, {onDelete: 'cascade' });
db.Likes.belongsTo(db.User, {onDelete: 'cascade' });
db.User.hasMany(db.Likes, {onDelete: 'cascade' });
db.User.hasMany(db.Dogs, { onDelete: 'cascade' });

// db.Dogs.belongsTo(db.User, { onDelete: 'cascade' });
// db.User.hasMany(db.Dogs, { onDelete: 'cascade' });
// db.Comment.belongsTo(db.User, { onDelete: 'cascade' });
// db.User.hasMany(db.Comment, { onDelete: 'cascade' });
// db.Comment.belongsTo(db.Dogs, { onDelete: 'cascade' });
// db.Dogs.hasMany(db.Comment, { onDelete: 'cascade' });
// db.Comment.belongsTo(db.Profile, { onDelete: 'cascade' });
// db.Profile.hasMany(db.Comment, { onDelete: 'cascade' });
// db.Profile.belongsTo(db.User, { onDelete: 'cascade' });
// db.User.hasMany(db.Profile, { onDelete: 'cascade' });
// db.Reply.belongsTo(db.Comment, { onDelete: 'cascade' });
// db.Comment.hasMany(db.Reply, { onDelete: 'cascade' });
// db.Dogs.belongsTo(db.Profile, { onDelete: 'cascade' });
// db.Profile.hasMany(db.Dogs, { onDelete: 'cascade' });
// db.Dogcomment.belongsTo(db.Dogs, { onDelete: 'cascade' });
// db.Dogs.hasMany(db.Dogcomment, { onDelete: 'cascade' });

module.exports = {
    db: db,
    sequelize: sequelize
};