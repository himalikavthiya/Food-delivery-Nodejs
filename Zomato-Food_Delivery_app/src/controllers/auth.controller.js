const bcrypt = require("bcrypt");
const moment = require("moment");
const jwt = require("jsonwebtoken");
const nodemailer = require('nodemailer');
const randomstring = require('randomstring');
const dotenv = require("dotenv");
dotenv.config();
const { authService } = require("../services");

/**email send */
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

async function sendOTPByEmail(email, otp) {
  try {
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: '123456',
      text: `Your OTP code is: ${otp}`,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    throw error;
  }
}
/**create register */
const register = async (req, res) => {
    try {
    const reqBody = req.body;

    const userExists = await authService.findUserByEmail(reqBody.email);
      if (userExists) {
        throw new Error("User already created by this email!", 409);
      }

      // Generate a random OTP (you can customize the length and characters)
    const otp = randomstring.generate({ length: 6, charset: 'numeric' });

    // Send the OTP via email
    await sendOTPByEmail(reqBody.email, otp);

    // Store the OTP securely for later verification
    const otpSecret = generateAndStoreSecret(reqBody.email, otp);

      let payload = {
        email: reqBody.email,
        role: reqBody.role,
        otpSecret: otpSecret,
        exp: moment().add(1, "days").unix(),
      };

      const token = await jwt.sign(payload, process.env.JWT_SECRET_KEY);

      const data = await authService.createUser(reqBody);
      if (!data) {
        throw new Error("Something went wrong, please try again or later!");
      }

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

  // Verify OTP function
async function verifyOTP(email, otp) {
  const otpSecret = retrieveSecretByEmail(email);

  // Verify the OTP
  if (otpSecret && otp === otpSecret) {
       return true;
  } else {
     return false;
  }
}

// Function to store OTP secret (you can use a database for this)
function generateAndStoreSecret(email, otp) {
    return otp;
}

// Function to retrieve OTP secret (you can use a database for this)
function retrieveSecretByEmail(email) {
  return null; // Return null if not found
}

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

      //   let data;
      //   if (token) {
      //     data = await userService.findUserAndUpdate(findUser._id, token);
      //   }
      res.status(200).json({
        success: true,
        message: `${findUser.role} Login successfully!`,
        data: token,
      });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };

  module.exports = {
    register,
    login,
    verifyOTP

  };