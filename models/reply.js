module.exports = function (sequelize, DataTypes) {
    return sequelize.define('reply', {
        comment: DataTypes.STRING,
        userId: DataTypes.INTEGER,
        commentId: DataTypes.INTEGER,
    });
};