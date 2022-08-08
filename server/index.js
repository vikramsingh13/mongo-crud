const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const Task = require('./models/Task');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://admin:LetMeMongo1337@cluster0.p0md3ko.mongodb.net/tasksData?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
    }
).catch(err => {
    console.warn("Connection Error: ", err);
}).then(() => {
    console.log("Connection to MongoDB atlas was successful");
});

app.post('/insert', (req, res) => {
    const task = new Task({taskName: "todo"});
    try{
        task.save();
        console.log("Task saved. ");
    }catch(err){
        console.warn("Error saving: ", err);
    }
});

app.listen(3001, '0.0.0.0', 50, ()=> {
    console.log("Express server listening on port: 3001 / 0.0.0.0");
});

