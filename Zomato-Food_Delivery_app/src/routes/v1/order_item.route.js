const express = require("express");
const { order_itemController } = require("../../controllers");
const router = express.Router();

/**create order_Itemaurants list data */
router.post("/create-order_Item", order_itemController.createOrder_item);

/** get all order_Itemaurant list*/
router.get("/list", order_itemController.getOrder_itemList);

/*Rorder_Itemaurant update by Id */
router.put("/update-order_Item/:order_ItemId", order_itemController.updateOrder_item);

/**order_Itemaurant list delete by Id */
router.delete("/delete-order_Item/:order_ItemId", order_itemController.deleteOrder_item);


module.exports = router;
