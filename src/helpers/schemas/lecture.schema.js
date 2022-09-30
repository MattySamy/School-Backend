import Joi from 'joi';
const lectureSchema = Joi.object({
    Id: Joi.number().required().messages({
        'number.base': 'Student Id must be a number',
        'any.required': 'Student Id is required',
    }),
    lectureId: Joi.number().required().messages({
        'number.base': 'Lecture Id must be a number',
        'any.required': 'Lecture Id is required',
    }),
});

export default lectureSchema;