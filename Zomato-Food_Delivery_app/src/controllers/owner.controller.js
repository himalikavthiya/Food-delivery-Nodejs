const { ownerService } = require("../services");

/**Create Owner Data  */
const createOwner = async(req,res) => {
    try {
        const reqbody = req.body;
         const ownerData = await ownerService.createOwner(reqbody);
        if(!ownerData){
            throw new Error("Something went wrong, try again later ");
        }
        res.status(201).json({
            succcess:true,
            message:"Owner Details created successfully !",
            data:ownerData
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
};

/** Get Owner Data List*/
const getOwnerList = async(req,res) => {
    try {
        const owner_list = await ownerService.getOwnerList();
        if(!owner_list){
          throw new Error("Owner list data not found  ");
        }
        res.status(200).json({
          success: true,
          message: "Get Owner list successfully !",
          data: owner_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
};

/**Update Owner data by Id */
const updateOwner = async(req,res) => {
    try {
        const ownerId = req.params.ownerId;
        const reqbody = req.body;
        const owner_exist = await ownerService.getOwnerById(ownerId);
        if(!owner_exist){
            throw new Error("Owner does not exist  ");
        }
        const owner_update = await ownerService.updateOwner(ownerId,reqbody);
        if(!owner_update){
            throw new Error("Something went wrong, try again later  ");
        }
        res.status(200).json({
            succcess:true,
            message:"Owner updated successfully !",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
};

/** Delete Owner  Data */
const deleteOwner = async(req,res) => {
    try {
        const ownerId = req.params.ownerId;
        const Owner_exist = await ownerService.getOwnerById(ownerId);
        if(!Owner_exist){
            throw new Error("Owner does not exist  ");
        }
        const Owner_delete = await ownerService.deleteOwner(ownerId);
        if(!Owner_delete){
            throw new Error("Something went wrong, try again later  ");
        }
        res.status(200).json({
            succcess:true,
            message:"Owner deleted successfully  ",
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
    createOwner,
    getOwnerList,
    updateOwner,
    deleteOwner
}