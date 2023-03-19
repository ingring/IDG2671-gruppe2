const mongoose = require('mongoose');
const Joi = require('joi');

const Tool = mongoose.model('Tool', new mongoose.Schema({
    name: {
        type: String,
        maxlength: 100,
        minlength: 2,
        required: true
    },
    description: {
        type: String,
        maxlength: 200,
        minlength: 10,
        required: true
    },
    image: {
        type: String,
        maxlength: 50,
        minlength: 10,
        required: true
    },
    status: { //If theres many items(quantity) how to display 1 is broken
        type: String,
        enum: ['broken', 'ok'],
        default: 'ok'
    },
    quantity: {
        type: Number,
        min: 0,
        max: 100,
        required: true
    }
}));

function validateTool(tool){
    const schema = Joi.object({
        name: Joi.string().min(2).max(100).required(),
        description: Joi.string().min(10).max(200).required(),
        image: Joi.string().min(10).max(50).required(),
        staus: Joi.string().valid('broken', 'ok'),
        quantity: Joi.number().min(0).max(100).required()
    });

    const validation = schema.validate(tool);
    return validation;
}