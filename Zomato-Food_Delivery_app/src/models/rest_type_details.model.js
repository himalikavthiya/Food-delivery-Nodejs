const mongoose = require("mongoose");

const rest_type_detailsSchema = new mongoose.Schema(
  {
    rest_name:{
        type:mongoose.Types.ObjectId,
        ref:"rest_details"
    },
    rest_type_name: {
      type:String,
      trim:true
    },
  },
  {
    timestamps: true,
  }
);

const Resturant_Type = mongoose.model("rest_type", rest_type_detailsSchema);
module.exports = Resturant_Type;
