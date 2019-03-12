module.exports = function (sequelize, DataTypes) {
    return sequelize.define('profile', {
        name: DataTypes.STRING,
        age: DataTypes.INTEGER,
        about: DataTypes.STRING,
        picture: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.INTEGER,
        address: DataTypes.STRING,
    });
};