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
    email: {
        type: String,
        minlength: 6,
        maxlength: 255,
        required: true
    },
    role: { //make an enum
        type: String,
        minlength: 6,
        maxlength: 40,
        required: true
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
    const schema = {
        first_name: Joi.string().min(2).max(50).required(),
        last_name: Joi.string().min(2).max(50).required(),
        username: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(6).max(255).required().email(),
        role: Joi.string().min(6).max(40).required(),
        field_of_study: Joi.string().min(6).max(40),
        start_year: Joi.number().min(2010).max(2040),
        admin:Joi.boolean()
    }

    return Joi.validate(user, schema);
}

module.exports.User = User;
module.exports.validate = validateUser;