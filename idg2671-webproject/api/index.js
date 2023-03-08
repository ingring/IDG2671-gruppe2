//validator
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

//dotenv
const dotenv = require('dotenv').config();

//express + app
const express = require('express');
const app = express();

//read json
app.use(express.json());

//mongoose + connect
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB...'))
    .catch(() => console.log('Could not connect to MongoDB...'));

//setting routes

//running server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));


//modules I want in the backend:
    //lodash
    //fawn
    //bcrypt
    //joi-objectid
    //joi-password something