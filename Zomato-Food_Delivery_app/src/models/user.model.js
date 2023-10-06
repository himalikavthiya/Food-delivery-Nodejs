const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    phone_no: {
      type: Number,
    },
    address:{
      type:String,
      trim:true
    },
    country:{
      type:String,
      trim:true,
      default:"india"
    },
    role:{
      type:String,
      enum:["user","admin","superadmin"]
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

const User = mongoose.model("user", userSchema);
module.exports = User;
