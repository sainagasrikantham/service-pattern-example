const userRepo = require('../repository/index');

const getAllUsers = async () => {
    console.log('Service: Fetching all users from the database');
    return await userRepo.getAllUsers();
}

module.exports = {
    getAllUsers
};
