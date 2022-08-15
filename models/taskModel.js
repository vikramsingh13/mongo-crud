const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    taskTitle: {
        type: String,
        required: [true, 'Please send a taskTitle.'],
    },
});

module.exports = mongoose.Model('Task', taskSchema);