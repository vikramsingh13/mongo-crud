const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const {errorHandler} = require('./middleware/errorMiddleware');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.use('/api/tasks', require("./routes/taskRoutes"));


app.use(errorHandler);

app.listen(PORT, (err)=>{
    if(err) {
        console.warn(`Listening error on port ${PORT} : ${err.message}`);
    } else {
        console.log(`Express server listening on port : ${PORT}`);
    }

});