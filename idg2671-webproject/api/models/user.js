const mongoose = require('mongoose');
const Joi = require('joi');

const User = mongoose.model('User', new mongoose.Schema({
    first_name: {
        type: String,
        maxlength: 50,
        minlength: 2,
        required: true
    },
    last_name: {
        type: String,
        maxlength: 50,
        minlength: 2,
        required: true
    },
    username: {
        type: String,
        maxlength: 50,
        minlength: 5,
        unique: true,
        required: true
    },
    password: {
        type:String,
        maxlength: 100,
        minlength: 8,
        required: true
    },
    email: {
        type: String,
        minlength: 6,
        maxlength: 255,
        unique: true,
        required: true
    },
    role: {
        type: String,
        enum: ['Student', 'Employee'],
        default: 'Student'
    },
    field_of_study: { //make an enum
        type: String,
        minlength: 10,
        maxlength: 100,
    },
    start_year: {
        type: Number,
        min: 2010,
        max: 2040, //set max to current year
    },
    admin: {
        type: Boolean,
        default: false
    }

}));

function validateUser(user){
    const schema = Joi.object({
        first_name: Joi.string().min(2).max(50).required(),
        last_name: Joi.string().min(2).max(50).required(),
        username: Joi.string().min(5).max(50).required(),
        password: Joi.string().min(8).required(),
        email: Joi.string().min(6).max(255).required().email(),
        role: Joi.string().valid('Student', 'Employee'),
        field_of_study: Joi.string().min(6).max(40),
        start_year: Joi.number().min(2010).max(2040),
        admin:Joi.boolean()
    });

    const validation = schema.validate(user);
    return validation;
}

module.exports.User = User;
module.exports.validate = validateUser;