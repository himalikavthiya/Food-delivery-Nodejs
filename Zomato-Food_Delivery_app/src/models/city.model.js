const mongoose = require("mongoose");

const citySchema = new mongoose.Schema(
  {
    state:{
        type:mongoose.Types.ObjectId,
        ref:"state"
    },
    city_name: {
      type:String,
      trim:true
    },
  },
  {
    timestamps: true,
  }
);

const City = mongoose.model("City", citySchema);
module.exports = City;
