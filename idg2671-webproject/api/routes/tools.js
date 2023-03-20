//user-model and validation
const {Tool, validate} = require('../models/tool');

//modules
const _ = require('lodash');

//router and mongoose
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//getting all tools;
router.get('/', async(req, res) => {
    const tools = await Movie.find().sort('name');
    res.send(tools);
});

//updating a tool
router.put('/:id', async(req, res) => {

    //validating the input
    const { error } = validate(req.body);

    try {
        const tool = await Tool.findByIdAndUpdate(req.params.id, _.pick(req.body, ['name', 'description', 'image', 'status', 'quantity']))
    }

    catch {
        res.status(400).send('Could not find selected tool');
    }
});

//creating a new tool
router.post('/', async(req, res) => {

    //validating the tool
    const { error } = validate(req.body);
    if(error)
        return res.status(400).send(error.details[0].message);

    //checking if the tool exists
    try {
        let tool = await Tool.findOne({name: req.body.name});
        if (tool) return res.status(400).send('Tool allready exists');
    }
    catch {
        res.status(400).send('connection to database failed');
    }

    //creating the tool
    let tool = new Tool(_.pick(req.body, 
        ['name', 'description', 'image', 'status', 'quantity']));
    
    try {
        tool.save();
        res.send(`Tool created: "${tool.name}"`);
    }
    catch {
        return res.status(400).send('An error occured during the creation of the user');
    }
});

module.exports = router;