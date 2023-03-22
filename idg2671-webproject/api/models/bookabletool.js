const mongoose = require('mongoose');
const Joi = require('joi');



const bookingSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true

    },
    start_time: {
        type: Date,
        required: true
    },
    end_time: {
        type: Date,
        required: true
    },
    username: {
        type: String,
        required: true
    },

    id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    }
});

const BookableTool = mongoose.model('Bookable_tool', new mongoose.Schema({
    name: {
        type: String,
        maxlength: 100,
        minlength: 2,
        unique: true,
        required: true
    },
    model:{
        type:String
    }
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
        enum: ['broken', 'ok'],//fikses (repair)
        default: 'ok'
    },
    course: { //
        type: String,
        minlength: 10,
        maxlength: 100
        },
    bookings: [bookingSchema]
}));

function validateBookableTool(tool){
    const schema = Joi.object({
        name: Joi.string().min(2).max(100).required(),
        description: Joi.string().min(10).max(200).required(),
        image: Joi.string().min(10).max(50).required(),
        staus: Joi.string().valid('broken', 'ok'),
        quantity: Joi.number().min(0).max(100).required(),
        course: Joi.string().min(10).max(100)
    });

    const validation = schema.validate(tool);
    return validation;
}

function bookings(booking){
    //current date in 'YYYY-MM-DD'
    //let currentDate = new Date().toJSON().slice(0, 10);
    const {date, time} = getCurrentTime;

    const schema = Joi.object({
        date: Joi.date().min(date).required(),
        start_time: Joi.date().min(time).max('23:59').required(),
        end_time: Joi.string().min('00:15').max('23:59').required(),
        username: Joi.string().min(5).max(50).required()
    });

    const validation = schema.validate(booking);
    return validation;
}

function getCurrentTime(){
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    let hh = today.getHours();
    let min = today.getMinutes();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const date = `${dd}-${mm}-${yyyy}`;
    const time = `${hh}:${min}`;
    return {date, time};
}

module.exports.BookableTool = BookableTool;
module.exports.validate = validateBookableTool;
module.exports.validateBooking = bookings;