const { Owner } = require("../models");

/**creete Owner data */
const createOwner = async(reqbody) => {
    return Owner.create(reqbody);
};

/**get Owner name */
const getOwnerByName = async(owner_name) => {
    return Owner.findOne({owner_name})
};

/**get Owner list */
const getOwnerList = async() => {
    return Owner.find().populate("state");
};

/**get Owner by Id */
const getOwnerById = async(ownerId) => {
    return Owner.findById(ownerId);
}

const updateOwner = async(ownerId,updateBody) => {
    return Owner.findByIdAndUpdate(ownerId,{$set:updateBody});
}

const deleteOwner = async(ownerId) => {
    return Owner.findByIdAndDelete(ownerId);
}

module.exports = {
    createOwner,
    getOwnerByName,
    getOwnerList,
    getOwnerById,
    updateOwner,
    deleteOwner
}