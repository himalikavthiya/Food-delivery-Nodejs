const express = require("express");
const authRoute = require("./auth.route");
const userRoute = require("./user.route");
const stateRoute = require("./state.route");
const citiesRoute = require("./cities.route");
const restRoute = require("./rest.route");
const rest_typeRoute = require("./rest_type.route");
const ownerRoute = require("./owner.route");
const order_itemRoute = require("./order_item.route");

const router = express.Router();

router.use("/auth", authRoute);
router.use("/user", userRoute);
router.use("/state", stateRoute);
router.use("/cities", citiesRoute);
router.use("/resturant", restRoute);
router.use("/rest-type", rest_typeRoute);
router.use("/owner", ownerRoute);
router.use("/order_item", order_itemRoute);

module.exports = router;
