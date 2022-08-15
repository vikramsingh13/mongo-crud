const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskTitle: {
        type: String,
        required: [true, 'Please send a taskTitle.'],
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Task', taskSchema);