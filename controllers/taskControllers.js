const asyncHandler = require('express-async-handler');
const taskModel = require('../models/taskModel');

//after model is updated
//functions need to account for task body and due date

//@desc Get tasks
//@path GET /api/tasks
//access PRIVATE
const getTasks = asyncHandler(async (req, res) => {
    const tasks = await taskModel.find();
    res.status(200).json(tasks);
});

//@desc Set task
//@path POST /api/tasks
//access PRIVATE
const setTask = asyncHandler(async (req, res) => {
    if(!req.body.taskTitle){
        res.status(400);
        throw new Error('Please send a taskTitle.');
    }
    const task = await taskModel.create(
        {
            taskTitle: req.body.taskTitle,
            taskBody: req.body.taskBody
        }
    );

    res.status(200).json(task);
});

//@desc Update task
//@path PUT /api/tasks
//access PRIVATE
const updateTask = asyncHandler(async (req, res) => {
    const task = await taskModel.findById(req.params.id);
    if(!task){
        res.status(400);
        throw new Error('Task not found.');
    }else if(!req.body.taskTitle){
        res.status(400);
        throw new Error('Please send a taskTitle');
    }
    const updatedTask = await taskModel.findByIdAndUpdate(
        req.params.id, 
        req.body,
        {
            new: true,
        }
    );
    res.status(200).json(updatedTask);
});

//@desc Delete tasks
//@path DELETE /api/tasks
//access PRIVATE
const deleteTask = asyncHandler(async (req, res) => {
    const task = await taskModel.findById(req.params.id);
    if(!task){
        res.status(400);
        throw new Error('Task not found.');
    }

    await task.remove();
    res.status(200).json({id: req.params.id});
});

module.exports = {
    getTasks,
    setTask,
    updateTask,
    deleteTask
};
