const Joi = require('joi');

export const productDataSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().positive().greater(1).precision(2).required(),
    count: Joi.number().positive().greater(1).precision(2).required(),
});

