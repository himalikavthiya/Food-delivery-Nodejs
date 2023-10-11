const { Resturant_Type } = require("../models");

/**creete rest_type data */
const createRest_type = async(reqbody) => {
    return Resturant_Type.create(reqbody);
}

/**get rest_type name */
const getRest_typeByName = async(rest_type_name) => {
    return Resturant_Type.findOne({rest_type_name})
};

/**get rest_type list */
const getRest_typeList = async() => {
    return Resturant_Type.find().populate({
        path:"rest_detail",
        select:"rest_name"});
};

/**get rest_type by Id */
const getRest_typeById = async(rest_typeId) => {
    return Resturant_Type.findById(rest_typeId);
}

const updateRest_type = async(rest_typeId,updateBody) => {
    return Resturant_Type.findByIdAndUpdate(rest_typeId,{$set:updateBody});
}

const deleteRest_type = async(rest_typeId) => {
    return Resturant_Type.findByIdAndDelete(rest_typeId);
}

module.exports = {
    createRest_type,
    getRest_typeByName,
    getRest_typeList,
    getRest_typeById,
    updateRest_type,
    deleteRest_type
}