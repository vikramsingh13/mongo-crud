const asyncHandler = require('express-async-handler');

//@desc Get tasks
//@path GET /api/tasks
//access PRIVATE
const getTasks = asyncHandler(async (req, res) => {

    res.status(200).json({message: "Get tasks"});
});

//@desc Set task
//@path POST /api/tasks
//access PRIVATE
const setTask = asyncHandler(async (req, res) => {
    res.status(200).json({message: "Set task"});
});

//@desc Update task
//@path PUT /api/tasks
//access PRIVATE
const updateTask = asyncHandler(async (req, res) => {
    if(!req.params.id){
        res.status(400);
        throw new Error('Please send a task id.');
    }
    res.status(200).json({message: `Update task : ${req.params.id}`});
});

//@desc Delete tasks
//@path DELETE /api/tasks
//access PRIVATE
const deleteTask = asyncHandler(async (req, res) => {
    if(!req.params.id){
        res.status(400);
        throw new Error('Please send a task id.');
    }
    res.status(200).json({message: `Delete task : ${req.params.id}`});
});

module.exports = {
    getTasks,
    setTask,
    updateTask,
    deleteTask
};
