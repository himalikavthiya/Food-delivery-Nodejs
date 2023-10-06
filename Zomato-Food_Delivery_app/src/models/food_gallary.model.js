const mongoose = require("mongoose");

const food_gallerySchema = new mongoose.Schema(
  {
    Resturant_Type: {
        type:mongoose.Types.ObjectId,
        ref:"rest_type_details"
      },
    food_name:{
        type:String,
      trim:true
    },
    food_img: {
      type:String,
      trim:true
    },
    food_des:{
        type:String,
        trim:true
    }
  },
  {
    timestamps: true,
  }
);

const Food_Gallery = mongoose.model("food_gallery", food_gallerySchema);
module.exports = Food_Gallery;
