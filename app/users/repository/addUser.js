const users = require('./usersDb');

const addUser = async (user) => {
    user.id = users.length + 1; // Simple ID assignment
    console.log('Adding user to the database', user);
    users.push(user);
    return user; // In a real database, you might return the newly created user object with an ID
}

module.exports = { addUser };
