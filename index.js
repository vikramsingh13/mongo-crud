const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const path = required('path');

const TaskModel = require('./models/Task');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

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

app.use(express.static(path.join(__dirname, "client", "build")));
app.get("/api", async(req, res) => {
    res.send({message: "api request"});
});
app.get("*", async(req,res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.post('/insert', async(req, res) => {
    const TaskName = req.body.taskName;
    const task = new TaskModel({taskName: TaskName});
    try{
        await task.save();
        console.log("Task saved: ", TaskName);
    }catch(err){
        console.warn("Error saving: ", err);
    }
});

app.get('/read', async(req, res) => {
    TaskModel.find({}, (err, response) =>{
        if(err){
            res.send(err);
        }
        res.send(response);
    });
});

app.listen(PORT, ()=> {
    console.log(`Express server listening on port: ${PORT}`);
});

//export express api for vercel
module.exports = app;

