import axios from 'axios';

let API_ENDPOINT = "";
if(process.env.REACT_APP_NODE_ENV === "development"){
    API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT ? process.env.REACT_APP_API_ENDPOINT : "https://mongo-crud.vikramsingh.tech/api/tasks/";
} else {
    API_ENDPOINT = "https://mongo-crud.vikramsingh.tech/api/tasks/";
}

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

const addTask = async(taskTitle, taskBody) => {
    try{
        await axios.post(API_ENDPOINT, {
            taskTitle: taskTitle,
            taskBody: taskBody,
            isComplete: false,
        });
    }catch(err){
        console.warn(`Axios addTask error: ${err}`);
    }
}

const updateTask = async(id, taskTitle, taskBody, isComplete) => {
    const updateTaskURI = API_ENDPOINT + id;
    console.log('updateTask : ', updateTaskURI);
    try {
        await axios.put(updateTaskURI,{
            taskTitle: taskTitle,
            taskBody: taskBody,
            isComplete: isComplete,
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
        console.warn(`Axios deleteTask error: ${err.message}`);
    }
}

export {getTasks, addTask, updateTask, deleteTask };