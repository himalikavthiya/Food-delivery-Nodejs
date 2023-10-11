const express = require("express");
const { orderController } = require("../../controllers");
const router = express.Router();

/**create order_Itemaurants list data */
router.post("/create-order_Item", orderController.createOrder);

/** get all order_Itemaurant list*/
router.get("/list", orderController.getOrderList);

/*Rorder_Itemaurant update by Id */
router.put("/update-order/:orderId", orderController.updateOrder);

/**order_Itemaurant list delete by Id */
router.delete("/delete-order/:orderId", orderController.deleteOrder);



module.exports = router;
