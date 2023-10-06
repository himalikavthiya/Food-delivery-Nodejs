const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema(
  {
    user_country:{
        type:mongoose.Types.ObjectId,
        ref:"user"
    },
    state_name: {
      type:String,
      trim:true
    },
  },
  {
    timestamps: true,
  }
);

const State = mongoose.model("State", stateSchema);
module.exports = State;
