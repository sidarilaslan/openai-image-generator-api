const joi = require('joi');

const createValidator = joi.object({
    prompt: joi.string().required().min(2),
    size: joi.string().required().equal("256x256", "512x512", "1024x1024")
});


module.exports = {
    createValidator
};