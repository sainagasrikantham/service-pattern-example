const addUser = require('./addUser');
const getAllUsers = require('./getAllUsers');
const getUserById = require('./getUserById');

const userDb = {
  // Function to simulate inserting a user into the database
  ...addUser,
  ...getAllUsers,
  ...getUserById
};

module.exports = userDb;
