const userRepo = require('../repo/index');

const addUser = async (user) => {
    // Calling the database function with dot notation
    console.log('Service: Adding user to the database', user);
    return await userRepo.addUser(user);
};

module.exports = {
    addUser
};
