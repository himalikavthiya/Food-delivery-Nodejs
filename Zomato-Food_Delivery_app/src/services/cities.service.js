const { Cities } = require("../models");

/**creete Cities data */
const createCities = async(reqbody) => {
    return Cities.create(reqbody);
};

/**get Cities name */
const getCitiesByName = async(cities_name) => {
    return Cities.findOne({cities_name})
};

/**get Cities list */
const getCitiesList = async() => {
    return Cities.find().populate({
        path:"state",
        select:"state_name"
    });
};

/**get Cities by Id */
const getCitiesById = async(citiesId) => {
    return Cities.findById(citiesId);
}

const updateCities = async(citiesId,updateBody) => {
    return Cities.findByIdAndUpdate(citiesId,{$set:updateBody});
}

const deleteCities = async(citiesId) => {
    return Cities.findByIdAndDelete(citiesId);
}

module.exports = {
    createCities,
    getCitiesByName,
    getCitiesList,
    getCitiesById,
    updateCities,
    deleteCities
}