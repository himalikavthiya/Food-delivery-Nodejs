/* -------------------------------------------------------------------------- */
/*                               USER MANAGMENT                               */
/* -------------------------------------------------------------------------- */
module.exports.User = require("./user.model");

 /* -------------------------------------------------------------------------- */
 /*                               LOCATION MODEL                               */
 /* -------------------------------------------------------------------------- */
module.exports.State = require("./state.model");
module.exports.Cities = require("./cities.model");

/* -------------------------------------------------------------------------- */
/*                               RESTURANT MODEL                              */
/* -------------------------------------------------------------------------- */
module.exports.Owners = require("./owner_details");
module.exports.Resturant = require("./rest_details");
module.exports.Resturant_Type = require("./rest_type_details.model");
module.exports.Food_Gallary = require("./food_gallary.model");
module.exports.Order = require("./orders.model");
module.exports.Order_Item = require("./order_item.model");
