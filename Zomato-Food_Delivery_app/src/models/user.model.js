const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    password: {
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
    },
    role:{
      type:String,
      enum:["user","admin","superadmin"],
      default: "user",
    },
    token:{
      type:String
    },
    is_active: {
      type: Boolean,
      default:false
    },
  },
  {
    timestamps: true,
    versionKey:false,
  }
);
userSchema.pre("save", async function (next) {
  var salt = bcrypt.genSaltSync(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("user", userSchema);
module.exports = User;
