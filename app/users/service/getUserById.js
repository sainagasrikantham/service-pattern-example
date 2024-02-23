const userRepo = require('../repo/index');

const getUserById = async(id) => {
    console.log(`Service: Fetching user with id ${id} from the database`);
    return await userRepo.getUserById(id);
}

module.exports = {
    getUserById
};
