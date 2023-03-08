//modules I want in the backend:
    //lodash
    //fawn
    //bcrypt
    //joi-objectid
    //joi-password something

const mongoose = require('mongoose');
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));