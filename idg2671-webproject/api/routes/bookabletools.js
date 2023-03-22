//user-model and validation
const {BookableTool, validate, validateBooking, validateDates} = require('../models/bookabletool');

//modules
const _ = require('lodash');

//router and mongoose
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//get all bookable tools
router.get('/', async(req, res) => {
    const tools = await BookableTool.find().sort('name');
    res.send(tools);
});

//create a bookable tool
router.post('/', async(req, res) => {

    //validating the tool
    const { error } = validate(req.body);
    if(error)
        return res.status(400).send(error.details[0].message);

    //checking if the tool exists
    try {
        let tool = await BookableTool.findOne({name: req.body.name});
        if (tool) return res.status(400).send('Tool allready exists');
    }
    catch {
        res.status(400).send('connection to database failed');
    }

    //creating the tool
    let tool = new BookableTool(_.pick(req.body, 
        ['name', 'description', 'image', 'status', 'quantity', 'course']));
    
    try {
        tool.save();
        res.send(`Tool created: "${tool.name}"`);
    }
    catch {
        return res.status(400).send('An error occured during the creation of the user');
    }
});

//create booking
router.post('/:id', async(req, res) => {

    //validate the booking
    const { error } = validateBooking(req.body);
    console.log('hi');
    if(error)
        return res.status(400).send(error.details[0].message);
    
    //checking if the dates are valid
    const dateError = validateDates(req.body);
    if(dateError) 
        return res.send(dateError);
    

    //USERNAME AND ADD USER TO BOOKING---------------


    //finding the tool
    try {
        console.log(req.params.id);
        const tool = await BookableTool.findById(req.params.id);
        tool.bookings.push(_.pick(req.body, ['date', 'start_time', 'end_time', 'username']));
        tool.save();
        res.send(tool);
    }

    catch {
        return res.status(400).send('Lost connection to the database');
    }



});


module.exports = router;