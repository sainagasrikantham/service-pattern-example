const users = require('./usersDb');

const getAllUsers = async () => {
    console.log('Fetching all users from the database');
    return users;
}

module.exports = { getAllUsers };
