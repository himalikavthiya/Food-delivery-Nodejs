const express = require("express");
const { restController } = require("../../controllers");
const { upload } = require("../../middlwares/upload");
const router = express.Router();

/**create restaurants list data */
router.post("/create-rest", 
upload.single("rest_img"),
restController.createRest);

/** get all Restaurant list*/
router.get("/list", restController.getRestList);

/*Rrestaurant update by Id */
router.put("/update-rest/:restId", restController.updateRest);

/**Restaurant list delete by Id */
router.delete("/delete-rest/:restId", restController.deleteRest);


module.exports = router;
