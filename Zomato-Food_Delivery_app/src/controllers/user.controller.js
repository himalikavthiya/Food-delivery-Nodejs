const dotenv = require("dotenv");
dotenv.config();
const auth = require("../middlwares/auth_middlware");
const { userService } = require("../services");

/**get all user */
const getAllUser = async (req, res) => {
  try {
      await auth(req.headers.token, ["admin"]);
      console.log(req.headers.token, "");

    const data = await userService.getAllUser({ role: "admin" });

    res.status(200).json({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

/** Get user details by id */
const getUserDetails = async (req, res) => {
  try {
    const getDetails = await userService.getUserList(req.params.userId);
    if (!getDetails) {
      throw new Error("User not found",403);
    }

    res.status(200).json({
      success: true,
      message: "User details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* delete user by id */
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userExists = await userService.getUserById(userId);
    if (!userExists) {
      throw new Error("User does not exist! ");
    }
    await userService.deleteUser(userId);
    res.status(200).json({
      success: true,
      message: "User deleted successfully ",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
}

/** user details update by id */
const updateDetails = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userExists = await userService.updateUser(userId);
    if (!userExists) {
      throw new Error("User not found!");
    }
    await userService.updateUser(userId, req.body);

    res.status(200).json({
      success: true,
      message: "User details update successfully!"
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllUser,
  getUserDetails,
  deleteUser,
  updateDetails
};
