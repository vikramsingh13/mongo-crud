const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        requried: true,
    },
    taskDesc: {
        type: String,
        required: false,
    },
    taskDueDate: {
        type: String,
        required: false,
    }
});

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;
