const { User } = require("../models");

const createUser = async (reqbody) => {
  return await User.create(reqbody);
};

const findUserByEmail = async (email) => {
  return await User.findOne({email});
};
const deleteUserByEmail = async (email) => {
  return await User.findOneAndDelete({email:email});
};

module.exports={
    createUser,
    findUserByEmail,
    deleteUserByEmail
}