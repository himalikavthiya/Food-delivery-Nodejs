const nodemailer = require('nodemailer');
const dotenv=require('dotenv');
dotenv.config();

// /**email send */
// const transport = nodemailer.createTransport({
//     host: process.env.SMTP_HOST,
//     port: process.env.SMTP_PORT,
//     auth: {
//       user: process.env.SMTP_USERNAME,
//       pass: process.env.SMTP_PASSWORD,
//     },
//   });
  
//   async function sendOTPByEmail(email, otp) {
//     try {
//       const mailOptions = {
//         from: process.env.EMAIL_FROM,
//         to: email,
//         subject ,
//         html: data,
//       };
  
//       await transport.sendMail(mailOptions);
//     } catch (error) {
//       throw error;
//     }
//   }

// // Function to retrieve OTP secret (you can use a database for this)
// function retrieveSecretByEmail(email) {
//     return null; // Return null if not found
//   }

//   // Function to store OTP secret (you can use a database for this)
// function generateAndStoreSecret(email, otp) {
//     return otp;
// }
let transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

/** Send mail */
const sendMail = async (to, data, subject) => {
  try {
    return transport.sendMail({
      from: process.env.EMAIL_FROM,
      to,
      subject,
      html: data,
    });
  } catch (error) {
    return false;
  }
};

module.exports = {
  sendMail,
};

// module.exports={
//     sendOTPByEmail,
//     retrieveSecretByEmail,
//     generateAndStoreSecret
// }