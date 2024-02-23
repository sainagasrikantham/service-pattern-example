const users = require('./usersDb');

const getUserById = async (userId) => {
    console.log(`Fetching user with id ${userId} from the database`);
    return users.find(user => user.id === userId);
}

module.exports = { getUserById };
