import Joi from 'joi';
import { joiPasswordExtendCore } from 'joi-password';
const joiPassword = Joi.extend(joiPasswordExtendCore);
const registerSchema = Joi.object({
    name: Joi.string().min(8).max(32).required().messages({
        'string.min': 'Name must be at least 8 characters',
        'string.max': "Name can't be longer than 32 characters",
        'string.empty': "Name can't be empty",
        'any.required': 'Name is required',
    }),
    email: Joi.string().email().required().messages({
        'string.email': 'Email must be a valid email address',
        'string.empty': "Email can't be empty",
        'any.required': 'Email is required',
    }),
    phone: Joi.string().min(11).max(11).regex(/(?=[01])[\d]{10,11}/).required().messages({
        'string.min': 'Phone must be at least 11 characters',
        'string.max': "Phone can't be longer than 11 characters",
        'string.empty': "Phone can't be empty",
        'any.required': 'Phone is required',
        'user.string.pattern.base': 'Phone must be a valid phone number',
    }),
    role: Joi.string().valid('student', 'teacher').lowercase().required().messages({
        'string.empty': "Role can't be empty",
        'any.required': 'Role is required',
    }),
    password: joiPassword
        .string()
        .min(8)
        .minOfLowercase(1)
        .minOfUppercase(1)
        .minOfNumeric(1)
        .noWhiteSpaces()
        .required()
        .messages({
            'string.min': 'Password must be at least 8 characters',
            'password.minOfLowercase': 'Password must contain at least 1 lowercase character',
            'password.minOfUppercase': 'Password must contain at least 1 uppercase character',
            'password.minOfNumeric': 'Password must contain at least 1 numeric character',
            'string.empty': "Password can't be empty",
            'any.required': 'Password is required',
        }),
});

export default registerSchema;