const express = require("express");
const { userController } = require("../../controllers");
const router = express.Router();

/**  get all user*/
router.get("/alluser", userController.getAllUser);

/** Get user list */
router.get("/userlist/:userId", userController.getUserDetails);

/**user delete by id*/
router.delete("/delete-user/:userId", userController.deleteUser);

/**user data update by Id */
router.put("/update-user/:userId",userController.updateDetails);

module.exports = router;
