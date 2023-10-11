const express = require("express");
const { restController } = require("../../controllers");
const router = express.Router();

/**create restaurants list data */
router.post("/create-rest", restController.createRest);

/** get all Restaurant list*/
router.get("/list", restController.getRestList);

/*Rrestaurant update by Id */
router.put("/update-rest/:restId", restController.updateRest);

/**Restaurant list delete by Id */
router.delete("/delete-rest/:restId", restController.deleteRest);


module.exports = router;
