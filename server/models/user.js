module.exports = (sequelize, { INTEGER, STRING }) => {
    const User = sequelize.define('User', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: INTEGER
        },
        email: {
            type: STRING,
            unique: true
        },
        password: STRING
    }, {});

    return User;
};