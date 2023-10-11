const mongoose = require("mongoose");

/**AdminUser schema */
const adminUserSchema = new mongoose.Schema(
    {
        user_id : {
            type : mongoose.Types.ObjectId,
            ref : "user"
        },
        role: {
            type: String,
            trim: true
        },
        permissions: {
            type: String,
            trim: true
        },
        is_active: {
            type: String,
            trim: true,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const AdminUser = mongoose.model("adminUser", adminUserSchema);
module.exports = AdminUser;