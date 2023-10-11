const mongoose = require("mongoose");
const orderItemSchema = new mongoose.Schema(
  {
    order: {
      type: mongoose.Types.ObjectId,
      ref: "order",
    },
     quantity: {
        type: Number,
      },
    subTotalPrice: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Order_Item = mongoose.model("orderItem", orderItemSchema);

module.exports = Order_Item;
