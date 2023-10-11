const express = require("express");
const { stateController } = require("../../controllers");
const router = express.Router();

/**create state  data */
router.post("/create-state", stateController.createState);

/** get all state list*/
router.get("/list", stateController.getStateList);

/**state update by Id */
router.put("/update-state/:stateId", stateController.updateState);

/**state list delete by Id */
router.delete("/delete-state/:stateId", stateController.deleteState);


module.exports = router;
