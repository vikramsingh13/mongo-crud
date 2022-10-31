const mongoose = require('mongoose');


//todo body text
//todo due date
const taskSchema = new mongoose.Schema({
    taskTitle: {
        type: String,
        required: [true, 'Please send a taskTitle.'],
    }, taskDescription: {
        type: String
    }, taskDueDate: {
        type: String,
        format: 'date',
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Task', taskSchema);