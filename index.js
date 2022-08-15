const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const {errorHandler} = require('./middlewares/errorMiddleware');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 3001;

//connecting to mongodb atlas
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/tasks', require("./routes/taskRoutes"));


app.use(errorHandler);

app.listen(PORT, (err)=>{
    if(err) {
        console.warn(`Listening error on port ${PORT} : ${err.message}`);
    } else {
        console.log(`Express server listening on port : ${PORT}`);
    }

});