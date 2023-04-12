//user-model and validation
const {BookableTool, validate, validateBooking, validateDates} = require('../models/bookabletool');
const {User} = require('../models/user');

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

router.get('/:id', async(req, res) => {
    const tool = await BookableTool.findById(req.params.id);
    res.send(tool.bookings);

})

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
    if(error)
        return res.status(400).send(error.details[0].message);
    
    //checking if the dates are valid
    const dateError = validateDates(req.body);
    if(dateError) 
        return res.send(dateError);
    
        //start mongoose session
        const session = await mongoose.startSession();
        session.startTransaction();
        
        try {
          // Insert the booking into the BookableTool document
          const tool = await BookableTool.findById(req.params.id).session(session);
          tool.bookings.push({
            username: req.body.username,
            date: req.body.date,
            start_time: req.body.start_time,
            end_time: req.body.end_time
          });
          await tool.save();
        
          // Add a reference to the booking in the User document
          const user = await User.findOneAndUpdate(
            { username: req.body.username },
            {
              $push: {
                bookings: {
                  tool: req.params.id,
                  date: req.body.date,
                  start_time: req.body.start_time,
                  end_time: req.body.end_time
                }
              }
            },
            { new: true, session }
          );
        
    
        //check if the transaction was completed, catch error if not 
        await session.commitTransaction();
        session.endSession();
        res.send('Booking created successfully');
        } catch (ex) {
            await session.abortTransaction();
            session.endSession();
            res.status(500).send(`An error occurred while creating the booking: ${ex}`);
        }
        

});



module.exports = router;