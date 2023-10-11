const { User } = require("../models");

const createUser = async (reqbody) => {
  return await User.create(reqbody);
};

const findUserByEmail = async (email) => {
  return await User.findOne({email});
};

module.exports={
    createUser,
    findUserByEmail
}