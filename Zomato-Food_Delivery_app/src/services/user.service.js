const { User } = require("../models");

/**create user */
const createUser = async (reqbody) => {
  return await User.create(reqbody);
};

/**user find by email */
const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

/** get all user by role */
const getAllUser = async (role) => {
  return await User.find(role);
};

/* Get user list */
const getUserList = async () => {
  return User.find();
};

/** Get user details by id */
const getUserById = async (userId) => {
  return User.findById(userId);
};

/**user delete by id */
const deleteUser = async (userId) => {
  return User.findByIdAndDelete(userId);
};

/** user data update by id */
const updateUser = async (userId, updateBody) => {
  return User.findByIdAndUpdate(userId, { $set: updateBody });
};

module.exports = {
  createUser,
  findUserByEmail,
  getAllUser,
  getUserList,
  getUserById,
  deleteUser,
  updateUser,
};
