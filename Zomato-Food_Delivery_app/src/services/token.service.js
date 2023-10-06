const jwt = require("jsonwebtoken");
const { token } = require("../models");
const dotenv = require("dotenv");
dotenv.config;

/**create token*/
const generateToken = async (reqBody) => {
  let payload = {
    ...reqBody,
  };
  return jwt.sign(payload, process.env.JWT_SECRET_KEY);
};

/**save Tokenin our Database */
const saveToken = async (reqBody) => {
  return token.findOneAndUpdate(
    { user: reqBody.user },
    {
      $set: {
        ...reqBody,
      },
    },
    { new: true, upsert: true }
  );
};

module.exports = {
  generateToken,
  saveToken,
};
