const express = require("express");
const { rest_typeController } = require("../../controllers");
const router = express.Router();

/**create rest_typeaurants list data */
router.post("/create-rest_type", rest_typeController.createRest_type);

/** get all rest_typeaurant list*/
router.get("/list", rest_typeController.getRest_typeList);

/*Rrest_typeaurant update by Id */
router.put("/update-restType/:rest_typeId", rest_typeController.updateRest_type);

/**rest_typeaurant list delete by Id */
router.delete("/delete-restType/:rest_typeId", rest_typeController.deleteRest_type);


module.exports = router;
