//user-model and validation
const {Tool, validate, validateChange} = require('../models/tool');

//modules
const _ = require('lodash');

//router and mongoose
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//getting all tools;
router.get('/', async(req, res) => {
    const tools = await Tool.find().sort('name');
    res.send(tools);
});

router.get('/:name', async(req, res) => {
    try {
        const tool = await Tool.findOne({name: req.params.name});
        res.send(tool);
    }

    catch {
        res.status(400).send('Could not find the tool');
    }
})

//updating a tool
router.put('/:id', async(req, res) => {

    //validating the input
    const { error } = validateChange(req.body);
    if(error)
        return res.status(400).send(error.details[0].message);


    try {
        const tool = await Tool.findOneAndUpdate({name: req.params.id}, {description: req.body.description, image: req.body.image, status: req.body.status, quantity: req.body.quantity}, {new: true});
        if(!tool) 
            return res.status(400).send(`Could not find selected tool ${req.params.id}`);
        res.send(tool);
    }

    catch {
        res.status(400).send(`Could not connect to the database`);
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

//deleting a tool
router.delete('/:id', async(req, res) => {
    try {
        const tool = await Tool.findOneAndDelete({name: req.params.id});
        res.send(tool);
    }
    catch {
        res.status(400).send('Could not find the tool');
    }
})

module.exports = router;