const bcrypt = require("bcrypt");
const moment = require("moment");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const { authService,emailService } = require("../services");
const ejs = require("ejs");
const path = require("path");

/**create register */
const register = async (req, res) => {
    try {
    const reqBody = req.body;

    const userExists = await authService.findUserByEmail(reqBody.email);
      if (userExists) {
        throw new Error("User already created by this email!", 409);
      }
      let payload = {
        email: reqBody.email,
        role: reqBody.role,
        exp: moment().add(1, "days").unix(),
      };

      const token = await jwt.sign(payload, process.env.JWT_SECRET_KEY);

      const data = await authService.createUser(reqBody);
      if (!data) {
        throw new Error("Something went wrong, please try again or later!");
      }

      ejs.renderFile(
        path.join(__dirname, "../views/otp-tem.ejs"),
        {
          email: reqBody.email,
          otp: ("0".repeat(4) + Math.floor(Math.random() * 10 ** 4)).slice(-4),
          user_name: reqBody.user_name
        },
        async (err, data) => {
          if (err) {
            let userCreated = await authService.findUserByEmail(reqBody.email);
            if (userCreated) {
              await authService.deleteUserByEmail(reqBody.email);
            }
            throw new Error("Something went wrong, please try again.");
          } else {
            emailService.sendMail(reqBody.email, data, "Verify Email");
          }
        }
      );
      res.status(201).json({
        success: true,
        message: `${reqBody.role} create successfully!`,
        data: data,
        token: token,
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

   /**user login */
  const login = async (req, res) => {
    try {
      const { email, password } = req.body;

      const findUser = await authService.findUserByEmail(email);

      if (!findUser) throw Error("User not found", 403);

      const successPassword = await bcrypt.compare(password, findUser.password);
      if (!successPassword) throw Error("Incorrect password");

      let payload = {
        email,
        role: findUser.role,
        exp: moment().add(1, "days").unix(),
      };

      let token;
      if (findUser && successPassword) {
        token = await jwt.sign(payload, process.env.JWT_SECRET_KEY);
      }
      res.status(200).json({
        success: true,
        message: `${reqBody.role} Login successfully!`,
        data: token,
      });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };

  module.exports = {
    register,
    login,
    };