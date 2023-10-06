const { User } = require("../models");

/**create user details */
const createUser = async (reqbody) => {
  return User.create(reqbody);
};

/**Get user List */
const getUser = async (req, res) => {
  return User.find();
};

/* user data by id */
const getUserId = async (userId) => {
  return User.findById(userId);
};

/**Delete user Id */
const deleteUser = async (userId) => {
  return User.findByIdAndDelete(userId);
};

/**update user detail*/
const updateUser = async (userId) => {
  return User.findByIdAndUpdate(userId);
};

module.exports = {
  createUser,
  getUser,
  getUserId,
  deleteUser,
  updateUser,
};
