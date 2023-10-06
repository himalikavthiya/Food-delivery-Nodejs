const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
  {
    user_name: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    rest_type: {
      type: mongoose.Types.ObjectId,
      ref: "rest_type",
    },
    order_date: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
