const { State } = require("../models");

const getStateByName = async (state_name) => {
  return State.findOne().populate({
    path: "country_name",
    select: ["country"],
  });
};

const createState = async (reqbody) => {
  return State.create(reqbody);
};

const getStateList = async () => {
  return State.find().populate({
    path: "country_name",
    select: "country",
  });
};

const getStateById = async (stateId) => {
  return State.findById(stateId);
};

const updateState = async (stateId, reqbody) => {
  return State.findByIdAndUpdate(stateId, { $set: reqbody });
};

const deleteState = async (stateId) => {
  return State.findByIdAndDelete(stateId);
};

module.exports = {
  getStateByName,
  createState,
  getStateList,
  getStateById,
  updateState,
  deleteState,
};
