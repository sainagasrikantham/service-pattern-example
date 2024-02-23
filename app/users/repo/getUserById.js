const users = require('./usersDb');

const getUserById = async (userId) => {
    console.log('Fetching user from the database', userId);
    return users.find(user => user.id === userId);
}

module.exports = { getUserById };
