const { rest_typeService } = require("../services");

/**Create rest_type Data  */
const createRest_type = async(req,res) => {
    try {
        const reqbody = req.body;
         const rest_typeData = await rest_typeService.createRest_type(reqbody);
        if(!rest_typeData){
            throw new Error("Something went wrong, try again later ");
        }
        res.status(201).json({
            succcess:true,
            message:"rest_type Details created successfully !",
            data:rest_typeData
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
};

/** Get rest_type Data List*/
const getRest_typeList = async(req,res) => {
    try {
        const rest_type_list = await rest_typeService.getRest_typeList();
        if(!rest_type_list){
          throw new Error("rest_type list data not found  ");
        }
        res.status(200).json({
          success: true,
          message: "Get rest_type list successfully !",
          data: rest_type_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
};

/**Update rest_type data by Id */
const updateRest_type = async(req,res) => {
    try {
        const rest_typeId = req.params.rest_typeId;
        const reqbody = req.body;
        const rest_type_Exi = await rest_typeService.getRest_typeById(rest_typeId);
        if(!rest_type_Exi){
            throw new Error("rest_type does not exist  ");
        }
        const rest_type_update = await rest_typeService.updateRest_type(rest_typeId,reqbody);
        if(!rest_type_update){
            throw new Error("Something went wrong, try again later! ");
        }
        res.status(200).json({
            succcess:true,
            message:"rest_type updated successfully !",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
};

/** Delete rest_type  Data */
const deleteRest_type = async(req,res) => {
    try {
        const rest_typeId = req.params.rest_typeId;
        const rest_type_Exi = await rest_typeService.getRest_typeById(rest_typeId);
        if(!rest_type_Exi){
            throw new Error("rest_type does not exist  ");
        }
        const rest_type_delete = await rest_typeService.deleteRest_type(rest_typeId);
        if(!rest_type_delete){
            throw new Error("Something went wrong, try again later  ");
        }
        res.status(200).json({
            succcess:true,
            message:"rest_type deleted successfully  ",
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
    createRest_type,
    getRest_typeList,
    updateRest_type,
    deleteRest_type
}