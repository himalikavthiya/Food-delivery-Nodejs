const express = require("express");
const userRoute = require("./user.route");

const orderRoute = require("./order.route");

// const tokenRoute = require("./token.route");

const router = express.Router();
router.use("/user", userRoute);
// router.use("/order", orderRoute);
// router.use("/token", tokenRoute);

module.exports = router;
