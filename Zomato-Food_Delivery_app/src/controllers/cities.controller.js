const { citiesService } = require("../services");

/**create Cities data */
const createCities = async(req,res) => {
    try {
        const reqbody = req.body;
        const cities = await citiesService.createCities(reqbody);
        if(!cities){
            throw new Error("Something went wrong, try again later  ");
        }
        res.status(201).json({
            succcess:true,
            message:"Cities Data created successfully! ",
            data:Cities
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
};

/**get Cities name list */
const getCitiesList = async(req,res) => {
    try {
        const citiesList = await citiesService.getCitiesList();
        if(!citiesList){
          throw new Error("Cities list data not found  ");
        }
        res.status(200).json({
          success: true,
          message: "Cities list successfully ",
          data: citiesList,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
};

/**get Cities data update */
const updateCities = async(req,res) => {
    try {
        const CitiesId = req.params.CitiesId;
        const reqbody = req.body;
        const citiesEx = await citiesService.getCitiesById(citiesId);
        if(!citiesEx){
            throw new Error("Cities does not exist  ");
        }
        const cities_update = await citiesService.updateCities(citiesId,reqbody);
        if(!cities_update){
            throw new Error("Something went wrong, try again later  ");
        }
        res.status(200).json({
            succcess:true,
            message:"Cities updated successfully ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
};

/**Cities data dlete by Id */
const deleteCities = async(req,res) => {
    try {
        const CitiesId = req.params.CitiesId;
        const CitiesEx = await citiesService.getCitiesById(CitiesId);
        if(!CitiesEx){
            throw new Error("Cities does not exist ");
        }
        const Cities_delete = await citiesService.deleteCities(CitiesId);
        if(!Cities_delete){
            throw new Error("Something went wrong, try again later  ");
        }
        res.status(200).json({
            succcess:true,
            message:"Cities deleted successfully ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
};

module.exports = {
    createCities,
    getCitiesList,
    updateCities,
    deleteCities
}