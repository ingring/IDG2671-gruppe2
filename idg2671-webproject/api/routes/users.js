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

    catch{
        res.status(400).send('An error has occured');
    }

    try {
        user.save();
        res.send(`User created: ${user.username}`);
    }

    catch {
        return res.status(400).send('An error occured during the creation of the user');
    }

});

router.get('/', async(req, res) => {
    res.send('test')
})

module.exports = router;