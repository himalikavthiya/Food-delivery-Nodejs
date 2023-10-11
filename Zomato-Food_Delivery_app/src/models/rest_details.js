const mongoose = require("mongoose");

const rest_DetailsSchema = new mongoose.Schema(
  {
    rest_name: {
      type: String,
      trim: true,
    },
    owner_name: {
      type:mongoose.Types.ObjectId,
      ref: "owner_details",
    },
    rest_phone_no: {
      type: Number,
    },
    rest_address:{
        type: String,
        trim: true,
    },
    rest_type:{
      type:mongoose.Types.ObjectId,
      ref: "rest_type",
    },
    city:{
      type:mongoose.Types.ObjectId,
      ref: "city",
    },
    rest_img:{
      type:String
    },
    food_img:{
      type:String,
      trim:true
    },
    opening_hours:{
      type:Date,
      default:new Date().setHours(9,0,0)
    },
    closeing_hours:{
        type:Date,
        default:new Date().setHours(10,0,0)
    },
  },
  {
    timestamps: true,
  }
);

const Resturant = mongoose.model("rest_Details", rest_DetailsSchema);
module.exports = Resturant;
