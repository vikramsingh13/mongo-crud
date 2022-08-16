import axios from 'axios';

const API_ENDPOINT = process.env.API_ENDPOINT ? process.env.API_ENDPOINT : "https://mongo-crud.vikramsingh.tech/api/tasks/";

const getTasks = async() => {
    let taskList = null;
    try{
        taskList = await axios.get(
            API_ENDPOINT, {
                responseType: "json",
            }
        );
    }catch (err){
        console.warn(`Axios getTasks error: ${err.message}`);
    }

    return taskList;
}

const addTask = async(taskTitle) => {
    try{
        await axios.post(API_ENDPOINT, {
            taskTitle: taskTitle,
        });
    }catch(err){
        console.warn(`Axios addTask error: ${err.message}`);
    }
}

const updateTask = async(id, taskTitle) => {
    const updateTaskURI = API_ENDPOINT + id;
    try {
        await axios.put(updateTaskURI,{
            taskTitle: taskTitle,
        });
    } catch(err){
        console.warn(`Axios updateTask error: ${err.message}`);
    }
}

const deleteTask = async(id) => {
    const deleteTaskURI = API_ENDPOINT + id;
    try {
        await axios.delete(deleteTaskURI);
    }catch(err){
        console.warn(`deleteTask error: ${err.message}`);
    }
}

export {getTasks, addTask, updateTask, deleteTask };