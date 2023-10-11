const { stateService } = require("../services");

/**Create State Data  */
const createState = async(req,res) => {
    try {
        const reqbody = req.body;
         const state = await stateService.createState(reqbody);
        if(!state){
            throw new Error("Something went wrong, try again later ");
        }
        res.status(201).json({
            succcess:true,
            message:"State created successfully !",
            data:state
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
};

/** Get State Data List*/
const getStateList = async(req,res) => {
    try {
        const state_list = await stateService.getStateList();
        if(!state_list){
          throw new Error("State list data not found  ");
        }
        res.status(200).json({
          success: true,
          message: "Get state list successfully !",
          data: state_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
};

/**Update State data by Id */
const updateState = async(req,res) => {
    try {
        const stateId = req.params.stateId;
        const reqbody = req.body;
        const state_exist = await stateService.get_state_by_id(stateId);
        if(!state_exist){
            throw new Error("State does not exist  ");
        }
        const state_update = await stateService.updateState(stateId,reqbody);
        if(!state_update){
            throw new Error("Something went wrong, try again later  ");
        }
        res.status(200).json({
            succcess:true,
            message:"State updated successfully !",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
};

/** Delete State  Data */
const deleteState = async(req,res) => {
    try {
        const stateId = req.params.stateId;
        const state_exist = await stateService.get_state_by_id(stateId);
        if(!state_exist){
            throw new Error("State does not exist  ");
        }
        const state_delete = await stateService.deleteState(stateId);
        if(!state_delete){
            throw new Error("Something went wrong, try again later  ");
        }
        res.status(200).json({
            succcess:true,
            message:"State deleted successfully  ",
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
    createState,
    getStateList,
    updateState,
    deleteState
}