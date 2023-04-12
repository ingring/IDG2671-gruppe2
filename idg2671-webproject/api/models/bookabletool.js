const mongoose = require('mongoose');
const Joi = require('joi');



const bookingSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true

    },
    start_time: {
        type: String,
        required: true
    },
    end_time: {
        type: String,
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
        required: true
    },
    model:{
        type:String,
        minlength:2,
        maxlength:30
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
    status: { 
        type: String,
        enum: ['broken', 'ok', 'in repair'],
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
        staus: Joi.string().valid('broken', 'ok', 'in repair'),
        quantity: Joi.number().min(0).max(100).required(),
        course: Joi.string().min(10).max(100)
    });

    const validation = schema.validate(tool);
    return validation;
}

function bookings(booking){
    //current date in 'YYYY-MM-DD'
    //let currentDate = new Date().toJSON().slice(0, 10);
    
    //regex pattern for time
    const pattern_time = /^[0-9]{2}:[0-9]{2}$/;

    const pattern_date = /^[0-9]{2}-[0-9]{2}.[0-9]{4}$/;

    const schema = Joi.object({
        date: Joi.string().pattern(new RegExp(pattern_date)).required(),
        start_time: Joi.string().pattern(new RegExp(pattern_time)).required(),
        end_time: Joi.string().pattern(new RegExp(pattern_time)).required(),
        username: Joi.string().min(5).max(50).required()
    });

    const validation = schema.validate(booking);
    return validation;
}

function validateDates(booking){
    const now = new Date();
    now.setHours(0,0,0,0)
    const limitDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7);

    //regex to check if time is valid
    const regex = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;


    if(!validateDate(booking.date)) return 'Date is not valid';

    u = booking.date.split('-');
    uDate = new Date(u[2], u[1] -1, u[0]);

    if(uDate < now || uDate > limitDate) return 'Date must be between today and the next 7 days';

    if(!regex.test(booking.start_time)) return 'Start time is not a valid time';
    if(!regex.test(booking.end_time)) return 'End time is not a valid time';
}

//checking if the date is a valid date
function validateDate(userDate){
    var parts = userDate.split("-");
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[2], 10);

    // Check the ranges of month and year
    if(year < 2022 || year > 3000 || month == 0 || month > 12)
        return false;

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    // Adjust for leap years
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
}

//not being used -------------------
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
    console.log(date);
    console.log(time);
    return {date, time};
}

module.exports.BookableTool = BookableTool;
module.exports.validate = validateBookableTool;
module.exports.validateBooking = bookings;
module.exports.validateDates = validateDates;