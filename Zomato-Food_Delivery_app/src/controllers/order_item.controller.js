const { order_itemService } = require("../services");

/**Create order_item Data  */
const createOrder_item = async(req,res) => {
    try {
        const reqbody = req.body;
         const order_item = await order_itemService.createOrder_item(reqbody);
        if(!order_item){
            throw new Error("Something went wrong, try again later ");
        }
        res.status(201).json({
            succcess:true,
            message:"order_item Details created successfully !",
            data:order_item
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
};

/** Get order_item Data List*/
const getOrder_itemList = async(req,res) => {
    try {
        const order_item_list = await order_itemService.getOrder_itemList();
        if(!order_item_list){
          throw new Error("order_item list data not found  ");
        }
        res.status(200).json({
          success: true,
          message: "Get order_item list successfully !",
          data: order_item_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
};

/**Update order_item data by Id */
const updateOrder_item = async(req,res) => {
    try {
        const order_itemId = req.params.order_itemId;
        const reqbody = req.body;
        const order_item_exist = await order_itemService.getOrder_itemById(order_itemId);
        if(!order_item_exist){
            throw new Error("order_item does not exist  ");
        }
        const order_item_update = await order_itemService.updateOrder_item(order_itemId,reqbody);
        if(!order_item_update){
            throw new Error("Something went wrong, try again later  ");
        }
        res.status(200).json({
            succcess:true,
            message:"order_item updated successfully !",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
};

/** Delete order_item  Data */
const deleteOrder_item = async(req,res) => {
    try {
        const order_itemId = req.params.order_itemId;
        const order_item_exist = await order_itemService.getOrder_itemById(order_itemId);
        if(!order_item_exist){
            throw new Error("order_item does not exist");
        }
        const order_item_delete = await order_itemService.deleteOrder_item(order_itemId);
        if(!order_item_delete){
            throw new Error("Something went wrong, try again later  ");
        }
        res.status(200).json({
            succcess:true,
            message:"order item deleted successfully",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
};

/**exports list */
module.exports = {
    createOrder_item,
    getOrder_itemList,
    updateOrder_item,
    deleteOrder_item
}