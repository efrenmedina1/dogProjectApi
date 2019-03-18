module.exports = function (sequelize, DataTypes) {
    return sequelize.define('dogComment', {
        comment: DataTypes.STRING,
        userId: DataTypes.INTEGER,
        dogId: DataTypes.INTEGER,
    })
}