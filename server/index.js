const express = require('express');
const mongoose = require('mongoose');
const app = express();
const TaskModel = require('./models/Task.js');


app.use(express.json());

mongoose.connect("mongodb+srv://admin:LetMeMongo1337@cluster0.p0md3ko.mongodb.net/tasksData?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    });

app.get('/', async(req, res) => {
    const task = new TaskModel({taskName: "task3", 
    taskDesc:"test task",
    taskDueDate:"tomorrow",
    });

    try{
        await task.save();
        console.log("Task saved.");
    } catch(err){
        console.warn("Error: ", err);
    }
})

app.listen(8000, () => {
    console.log("Server running on port 8000!");
});


