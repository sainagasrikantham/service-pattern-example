const userDb = require('../repo/index');

const getUserById = async(id) => {
    console.log(`Service: Fetching user with id ${id} from the database`);
    return await userDb.getUserById(id);
}

module.exports = {
    getUserById
};
