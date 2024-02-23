// userService.js
const addUser = require('./addUser');
const getAllUsers = require('./getAllUsers');
const getUserById = require('./getUserById');

const userService = {
  // Function to add a user
  ...addUser,
  ...getAllUsers,
  ...getUserById
};

module.exports = userService;
