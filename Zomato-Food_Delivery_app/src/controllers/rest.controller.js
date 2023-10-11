const { Error } = require("mongoose");
const { restService } = require("../services");

// Create restaurant
const createRest = async(req,res) => {
    try {
        if(req.files.length < 2){
            throw new Error("Restaurant and food both images are required !")
        }
        console.log(req.files);
        const reqBody = req.body;
        reqBody.rest_img = req.files[0].filename
        reqBody.food_img = req.files[1].filename
        const rest_exist = await restService.getRestByName(reqBody.rest_name);
        if(rest_exist){
            throw new Error("Restaurant on this name already exist !");
        }
        const rest = await restService.createRest(reqBody);
        if(!rest){
            throw new Error("Something went wrong, Try again later !");
        }
        res.status(200).json({
            succcess:true,
            message:"Restaurant created successfully !",
            data:rest
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

/**Update Restaurant*/
const updateRest = async(req,res) => {
    try {
        const restId = req.params.restId;
        const reqbody = req.body;
        const restaurant_exist = await restService.getRestById(restId);
        if(!restaurant_exist){
            throw new Error("Restaurant does not exist  ");
        }
        const restaurant_update = await restService.updateRest(restId,reqbody);
        if(!restaurant_update){
            throw new Error("Something went wrong,pls try again later");
        }
        res.status(200).json({
            succcess:true,
            message:"Restaurant updated successfully!",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

/**Update status for Resutaurant */
const updateStatus = async(req,res) => {
    try {
        const restId = req.params.restId;
        const restaurant_exist = await restService.getRestById(restId);
        if(!restaurant_exist){
            throw new Error("Restaurant does not exist !");
        }
        const restaurant_updated = await restService.updateStatus(restId)
        if(!restaurant_updated){
            throw new Error("Something went wrong  ")
        }
        res.status(200).json({
            success:true,
            messgae:"Restaurant status updated successfully  "
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message
        })
    }
}

/**Delete restaurant */
const deleteRest = async(req,res) => {
    try {
        const restId = req.params.restId;
        const restaurant_exist = await restService.getRestById(restId);
        if(!restaurant_exist){
            throw new Error("Restaurant does not exist");
        }
        const restaurant_delete = await restService.deleteRest(restId);
        if(!restaurant_delete){
            throw new Error("Something went wrong, try again later ");
        }
        res.status(200).json({
            succcess:true,
            message:"Restaurant deleted successfully  ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

/**Get restaurant list */
const getRestList = async(req,res) => {
    try {
        const rest_list = await restService.getRestList();
        if(!rest_list){
          throw new Error("Restaurant list data not found ");
        }
        res.status(200).json({
          success: true,
          message: "Get restaurant list dispatch successfully  ",
          data: rest_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}
// Expoting controller object
module.exports = {
    createRest,
    getRestList,
    updateRest,
    deleteRest,
    updateStatus,
}