const { adminUserService } = require("../services");

/**create Adminuser */
const createAdminUser = async (req, res) => {
    try {
        const reqBody = req.body;
        const adminUser = await adminUserService.createAdminUser(reqBody);

        if (!adminUser) {
            throw new Error("AdminUser not found !");
        }

        res.status(200).json({
            success: true,
            message: "AdminUser created !",
            data: adminUser
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            data: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/**get Adminuser list */
const getAdminUserList = async (req, res) => {
    try {
        const getList = await adminUserService.getAdminUserList();
        if (!getList) {
            throw new Error("AdminUser not found !");
        }

        res.status(200).json({
            success: true,
            message: "Get Adminuser list !",
            data: getList
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}

/**get Admin user details by id*/
const getAdminUserDetails = async (req, res) => {
    try {
        const adminUserId = req.params.adminUserId;
        const getDetails = await adminUserService.getAdminUserById(adminUserId);

        if (!getDetails) {
            throw new Error("AdminUser not found !");
        }

        res.status(200).json({
            success: true,
            message: "AdminUser details get successfully !",
            data: getDetails
        })
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}

/**AdminUser details update by id */
const updateAdminUser = async (req, res) => {
    try {
        const adminUserId = req.params.adminUserId;
        const AdminuserExist = await adminUserService.getAdminUserById(adminUserId);

        if (!AdminuserExist) {
            throw new Error("AdminUser not found !");
        }

        await adminUserService.updateAdminUser(adminUserId, req.body);

        res.status(200).json({
            success: true,
            message: "AdminUser details update successfully !"
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}

/**delete Adminuser */
const deleteAdminUser = async (req, res) => {
    try {
        const AdminuserExists = await adminUserService.getAdminUserById(req.params.adminUserId);
        if (!AdminuserExists) {
            throw new Error("AdminUser not found !");
        }

        await adminUserService.deleteAdminUser(req.params.adminUserId);

        res.status(200).json({
            success: true,
            message: "AdminUser deleted !"
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: true,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

module.exports = {
    createAdminUser,
    getAdminUserList,
    getAdminUserDetails,
    updateAdminUser,
    deleteAdminUser
}