const Sequelize = require('sequelize');

const sequelize = new Sequelize('dogprojectapi', 'postgres', 'Welcome1', {
    host: 'localhost',
    dialect: 'postgres'

});

sequelize.authenticate().then(
    function() {
        console.log('Connected to dogprojectapi postgres database');
    },
    function(Err){
        console.log(err);
    }
);

module.exports = sequelize;
