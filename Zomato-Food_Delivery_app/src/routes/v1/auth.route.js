const express = require("express");
const { authController } = require("../../controllers");
const router = express.Router();

/* user register route*/
router.post('/signup',authController.register);

/**  user login route*/
router.post("/signin",authController.login);




module.exports = router;
