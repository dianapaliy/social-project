module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: sequelize.INTEGER
        },
        firstname: {
            type: sequelize.STRING,
            notEmpty: true
        },

        lastname: {
            type: sequelize.STRING,
            notEmpty: true
        },
        username: {
            type: sequelize.TEXT,
            allowNull: false
        },
        email: {
            type: sequelize.STRING,
            validate: {
                isEmail: true
            },
            unique: true,
            allowNull: false
        },
        password: {
            type: sequelize.STRING,
            allowNull: false
        },
    }, {});

    User.associate = models => {
        // associations can be defined here
    };

    return User;
};