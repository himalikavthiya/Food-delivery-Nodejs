const express = require("express");
const { citiesController } = require("../../controllers");
const router = express.Router();

/**create cities list data */
router.post("/create-cities", citiesController.createCities);

/** get all Cities list*/
router.get("/list", citiesController.getCitiesList);

/**Cities update by Id */
router.put("/update-Cities/:citiesId", citiesController.updateCities);

/**Cities list delete by Id */
router.delete("/delete-Cities/:citiesId", citiesController.deleteCities);


module.exports = router;
