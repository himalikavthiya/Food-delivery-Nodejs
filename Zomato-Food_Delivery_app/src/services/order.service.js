const { order } = require("../models");

/**create order  */
const createOrder = async (reqbody) => {
  return order.create(reqbody);
};

/**Get order List */
const getOrder = async (req, res) => {
  return order
    .find()
    .populate({
      path: "user",
      select: "user_name",
    })
    .populate({
      path: "rest_type",
      select: "rest_type_name",
    });
};

/* order data by ID */
const getOrderId = async (orderId) => {
  return order.findById(orderId);
};

/**Delete order Id */
const deleteOrder = async (orderId) => {
  return order.findByIdAndDelete(orderId);
};

/**update order detail*/
const updataOrder = async (orderId) => {
  return order.findByIdAndUpdate(orderId);
};

module.exports = {
  createOrder,
  getOrder,
  getOrderId,
  deleteOrder,
  updataOrder,
};
