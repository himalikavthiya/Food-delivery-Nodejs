const mongoose = require("mongoose");

const citiesSchema = new mongoose.Schema(
  {
    state_name:{
        type:mongoose.Types.ObjectId,
        ref:"state"
    },
    cities_name: {
      type:String,
      trim:true
    },
  },
  {
    timestamps: true,
    versionKey:false,
  }
);

const Cities = mongoose.model("Cities", citiesSchema);
module.exports = Cities;
