const userDb = require('../repo/index');

const getAllUsers = async () => {
    console.log('Service: Fetching all users from the database');
    return await userDb.getAllUsers();
}

module.exports = {
    getAllUsers
};
