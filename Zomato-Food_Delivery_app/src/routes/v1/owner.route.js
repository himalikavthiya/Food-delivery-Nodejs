const express = require("express");
const { ownerController } = require("../../controllers");
const router = express.Router();

/**create owners list data */
router.post("/create-owner", ownerController.createOwner);

/** get all owners list*/
router.get("/owner-list", ownerController.getOwnerList);

/*owners update by Id */
router.put("/update-owner/:ownerId", ownerController.updateOwner);

/**owners list delete by Id */
router.delete("/delete-owner/:ownerId", ownerController.deleteOwner);


module.exports = router;
