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

export default getTasks;