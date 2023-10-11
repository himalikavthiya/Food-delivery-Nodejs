/* -------------------- ADMIN MANAGAMENT -------------------- */
module.exports.adminUserController = require("./adminUser.controller");

/* ----------------------------- USER MANAGAMENT ---------------------------- */
module.exports.userController = require("./user.controller");
module.exports.authController = require("./auth.controller");
module.exports.ownerController = require("./owner.controller");

/* ----------------------------- LOCATION MODEL ----------------------------- */
module.exports.citiesController = require("./cities.controller");
module.exports.stateController = require("./state.controller");

/* ----------------------------- RESTURANT MODEL ---------------------------- */
module.exports.restController = require("./rest.controller");
module.exports.rest_typeController = require("./rest_type.controller");
module.exports.orderController = require("./order.controller");
module.exports.order_itemController = require("./order_item.controller");

