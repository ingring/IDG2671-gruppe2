//user-model and validation
const {User, validate} = require('../models/user');

//modules
const _ = require('lodash');
const bcrypt = require('bcrypt');

//router and mongoose
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//creating a new user
router.post('/', async(req, res) => {
    
    //validating the user
    const { error } = validate(req.body);
    if (error)
        return res.status(400).send(error.details[0].message);

    //checking if username allready exists
    try {
        let user = await User.findOne({username: req.body.username});
        if (user) return res.status(400).send('Username allready exists');
    }

    catch{
        res.status(400).send('connection to database failed');
    }
    //creating the new user + hashing password
    let user = new User(_.pick(req.body, 
        ['first_name', 'last_name', 'username', 'password', 'email', 'role', 'field_of_study', 'start_year', 'admin']));
    
        try{
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
    }
    //if salting and hashing fails
    catch{
        res.status(400).send('An error has occured');
    }

    //create the user
    try {
        user.save();
        res.send(`User created: "${user.username}"`);
    }

    //if the creation of the user failed
    catch {
        return res.status(400).send('An error occured during the creation of the user');
    }

});

//getting all users;
router.get('/', async(req, res) => {
    const users = await User.find().select({_id: 0, password:0}).sort('last_name');
    res.send(users);
});

//getting one user
router.get('/:id', async(req, res) => {
    const user = await User.findOne({username: req.params.id}).select({_id: 0, password:0});
    res.send(user);
});


module.exports = router;