const Joi = require("joi");

/**create state */
const stateValidation =
     Joi.object().keys({
        state_name: Joi.string().required().trim(),
        })


module.exports = {
    stateValidation
}