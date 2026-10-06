import Joi from 'joi';

export const addCarsSchema = Joi.object({
    brand: Joi.string().min(3).max(20).required().messages({
        'string.empty': 'Please enter a brand',
        'string.min': 'Brand is too short',
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.base': 'Please enter a price',
        'number.min': 'Price is too short',
    }),
    year: Joi.number().min(1990).max(2026).required().messages({
        'number.base': 'Please enter a year',
        'number.min': 'Year is not required',
        'number.max': 'Year is not required',
    })
})