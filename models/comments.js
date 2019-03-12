module.exports = function (sequelize, DataTypes) {
    return sequelize.define('comment', {
        userId: DataTypes.STRING,
        description: DataTypes.STRING,
    })
}