module.exports = function (sequelize, DataTypes) {
    return sequelize.define('comment', {
        userId: DataTypes.INTEGER,
        description: DataTypes.STRING,
        username: DataTypes.STRING,
    })
}