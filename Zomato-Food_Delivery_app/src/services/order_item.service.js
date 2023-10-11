const { Order_Item } = require("../models");

/**creete order_item data */
const createOrder_item = async (reqbody) => {
  return order_item.create(reqbody);
};

/**get order_item name */
const getOrder_itemByName = async (order_item_name) => {
  return Order_Item.findOne({ order_item_name });
};

/**get order_item list */
const getOrder_itemList = async () => {
  return Order_Item.find().populate({
    path: "order",
    select: "order_date",
  });
};

/**get order_item by Id */
const getOrder_itemById = async (order_itemId) => {
  return Order_Item.findById(order_itemId);
};

const updateOrder_item = async (order_itemId, updateBody) => {
  return Order_Item.findByIdAndUpdate(order_itemId, { $set: updateBody });
};

const deleteOrder_item = async (order_itemId) => {
  return Order_Item.findByIdAndDelete(order_itemId);
};

module.exports = {
  createOrder_item,
  getOrder_itemByName,
  getOrder_itemList,
  getOrder_itemById,
  updateOrder_item,
  deleteOrder_item,
};
