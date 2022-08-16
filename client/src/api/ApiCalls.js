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
        console.warn(`Axios get error: ${err.message}`);
    }

    return taskList;
}

const deleteTask = async(id) => {
    
    const deleteTaskURI = API_ENDPOINT + id;
    let taskDeletedRes = null;
    try {
        taskDeletedRes = await axios.delete(deleteTaskURI);
        console.log("delete task called for : ", id);
        console.log(taskDeletedRes);
    }catch(err){
        console.warn(`deleteTask error: ${err.message}`);
    }

    return taskDeletedRes;
}

export {getTasks, deleteTask };