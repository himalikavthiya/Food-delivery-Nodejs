/* ----------------------------- USER MANAGMENT ----------------------------- */
module.exports.User = require("./user.model");

/* ---------------------------- ADMIN MANAGAMENT ---------------------------- */
module.exports.AdminUser = require("./adminUser.model");

/* ----------------------------- LOCATION MODEL ----------------------------- */
module.exports.State = require("./state.model");
module.exports.Cities = require("./cities.model");

 /* ----------------------------- RESTURANT MODEL ---------------------------- */
module.exports.Owners = require("./owner_details");
module.exports.Restaurant = require("./rest_details");
module.exports.Resturant_Type = require("./rest_type_details.model");
module.exports.Order = require("./orders.model");
module.exports.Order_Item = require("./order_item.model");
