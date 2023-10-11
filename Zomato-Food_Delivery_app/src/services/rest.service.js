const { Restaurant } = require("../models");

// Get restaurant by name
const getRestByName = async (rest_name) => {
  return Restaurant.findOne({ rest_name });
};
// Create restaurant
const createRest = async (reqBody) => {
  return Restaurant.create(reqBody);
};
// Get restaurant list
const getRestList = async () => {
  return Restaurant.find()
    .populate({
      path: "owner_name",
      select: "owner_name",
    })
    .populate("rest_type")
    .populate("cities");
};
// Get restaurant by id
const getRestById = async (restId) => {
  return Restaurant.findById(restId);
};
// Update restaurant by id
const updateRest = async (restId, reqbody) => {
  return Restaurant.findByIdAndUpdate(restId, { $set: reqbody });
};
// Update restaurant status by id
const updateStatus = async (restId) => {
  const rest = await getRestById(restId);
  if (!rest) {
    throw new Error("Restaurant does not exist !");
  }
  return Restaurant.findByIdAndUpdate(restId, {
    $set: { rest_status: !rest.rest_status },
  });
};
// Delete restaurant
const deleteRest = async (restId) => {
  return Restaurant.findByIdAndDelete(restId);
};
// Exporting services object
module.exports = {
  getRestByName,
  createRest,
  getRestList,
  getRestById,
  updateRest,
  deleteRest,
  updateStatus,
};
