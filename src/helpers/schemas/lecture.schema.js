import Joi from 'joi';
const lectureSchema = Joi.object({
    Id: Joi.number().required().messages({
        'number.base': 'Student Id must be a number',
        'any.required': 'Student Id is required',
    }),
    lectures: Joi.array().items(Joi.object({
        lectureId: Joi.number().required().messages({
            'number.base': 'Lecture Id must be a number',
            'any.required': 'Lecture Id is required',
        }),
    })).required().messages({
        'array.base': 'Lectures must be an array',
        'any.required': 'Lectures is required',
    }),
});

export default lectureSchema;