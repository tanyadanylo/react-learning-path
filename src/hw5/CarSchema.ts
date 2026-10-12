import Joi from 'joi';

export const addCarsSchema = Joi.object({
    brand: Joi.string().pattern(/^[a-zA-Za-яA-яёЁіІїЇєЄґҐ]{1,20}$/).max(20).required().messages({
        'string.empty': 'Please enter a brand',
        'string.min': 'Brand is too short',
        'string.pattern.base': 'You can use only letters',
    }),
    price: Joi.number().integer().min(0).max(1000000).required().messages({
        'number.base': 'Please enter a price',
        'number.min': 'Price is too short',
    }),
    year: Joi.number().integer().min(1990).max(2026).required().messages({
        'number.base': 'Please enter a year',
        'number.min': 'Year is not required',
        'number.max': 'Year is not required',
    })
})