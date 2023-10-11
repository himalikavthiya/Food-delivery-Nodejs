const { orderService } = require("../services");

/**Create order Data  */
const createOrder = async(req,res) => {
    try {
        const reqbody = req.body;
         const order = await orderService.createOrder(reqbody);
        if(!order){
            throw new Error("Something went wrong, try again later ");
        }
        res.status(201).json({
            succcess:true,
            message:"order Details created successfully !",
            data:order
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
};

/** Get order Data List*/
const getOrderList = async(req,res) => {
    try {
        const order_list = await orderService.getOrderList();
        if(!order_list){
          throw new Error("order list data not found  ");
        }
        res.status(200).json({
          success: true,
          message: "Get order list successfully !",
          data: order_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
};

/**Update order data by Id */
const updateOrder = async(req,res) => {
    try {
        const orderId = req.params.orderId;
        const reqbody = req.body;
        const order_exist = await orderService.getOrderById(orderId);
        if(!order_exist){
            throw new Error("order does not exist  ");
        }
        const order_update = await orderService.updateOrder(orderId,reqbody);
        if(!order_update){
            throw new Error("Something went wrong, try again later  ");
        }
        res.status(200).json({
            succcess:true,
            message:"order updated successfully !",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
};

/** Delete order  Data */
const deleteOrder = async(req,res) => {
    try {
        const orderId = req.params.orderId;
        const order_exist = await orderService.getOrderById(orderId);
        if(!order_exist){
            throw new Error("order does not exist");
        }
        const order_delete = await orderService.deleteOrder(orderId);
        if(!order_delete){
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
    createOrder,
    getOrderList,
    updateOrder,
    deleteOrder
}