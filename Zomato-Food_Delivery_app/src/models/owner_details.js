const mongoose = require("mongoose");

const owners_DetailsSchema = new mongoose.Schema(
  {
    owner_name: {
      type: String,
      trim: true,
    },
    owner_email: {
      type: String,
      trim: true,
    },
    owner_phone_no: {
      type: Number,
    },
    is_active: {
      type: Boolean,
      default:true
    },
  },
  {
    timestamps: true,
  }
);

const Owners = mongoose.model("owner", owners_DetailsSchema);
module.exports = Owners;
