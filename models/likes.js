module.exports = function (sequelize, DataTypes) {
    return sequelize.define('like', {
        userid: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        dogid: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });
};