const Joi = require("joi");

/**create user */
const createUser = {
    body: Joi.object().keys({
        user_name: Joi.string().required().trim(),
        email: Joi.string().required().trim(),
        password: Joi.string().required().trim(),
        role: Joi.string().required().trim(),
        })
}

module.exports = {
    createUser
}