const { AdminUser } = require("../models");

/**create AdminUser */
const createAdminUser = async (reqBody) => {
    return AdminUser.create(reqBody);
}

/**get AdminUser list */
const getAdminUserList = async (req, res) => {
    return AdminUser.findOne()
        .populate({
            path: "user_id",
            select: "user_name",
        });
}

/**get AdminUser details by id */
const getAdminUserById = async (adminUserId) => {
    return AdminUser.findById(adminUserId);
}

/**update AdminUser */
const updateAdminUser = async (adminUserId, updateBody) => {
    return AdminUser.findByIdAndUpdate(adminUserId, { $set: updateBody });
}

/**delete AdminUser */
const deleteAdminUser = async (adminUserId) => {
    return AdminUser.findByIdAndDelete(adminUserId);
}

module.exports = {
    createAdminUser,
    getAdminUserList,
    getAdminUserById,
    updateAdminUser,
    deleteAdminUser
}