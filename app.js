const fs = require('fs');
const express = require('express');
const app = express();
const morgan = require('morgan');
app.use(morgan('dev'));
app.use(express.json());  //middleaware in app.use
app.use(express.static(`${__dirname}/public`))

//create middleware 
app.use((req, res, next) => {
    console.log("welcome in middleware :) ");

    next();
});


app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
})


//3) ROUTES
const studentsRouter = require('./routes/studentsRouter');
app.use('/api/v1/students', studentsRouter); 




module.exports = app;