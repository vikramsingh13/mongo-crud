import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskAdd from './components/TaskAdd';
import './App.css';
import {getTasks, addTask, updateTask, deleteTask} from './api/ApiCalls';


const App = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const callApi = async() =>{
            const taskList = await getTasks();
            setTasks(taskList.data);
        };
        callApi();
        
    }, []);

    //updates the tasks in state
    //called everytime a task is added, updated, deleted, etc. 
    const updateTasksList = async() =>{
        const taskList = await getTasks();
        setTasks(taskList.data);
    }

    //takes string as taskTitle
    //calls addTask
    //updates list with updateTasksList
    const addTaskAndUpdateList = async(taskTitle, taskBody) => {
        await addTask(taskTitle, taskBody);
        await updateTasksList();
    }

    //takes string as id, string as taskTitle
    //calls updateTask
    //updates list with updateTasksList
    const updateTaskAndUpdateList = async(id, taskTitle) => {
        await updateTask(id, taskTitle);
        await updateTasksList();
    }

    //takes string as id
    //calls deleteTask
    //updates list with updateTasksList
    const deleteTaskAndUpdateList = async(id) => {
        await deleteTask(id);
        await updateTasksList()
    }

    return (
        <div className='app'>
            <div className="app-container">
                <div className='app-title'>
                    CRUD with MongoDB, expressJS and reactJS
                </div>
                <TaskAdd addTask={addTaskAndUpdateList}/>
                <TaskList 
                    tasks={tasks}
                    deleteTask={deleteTaskAndUpdateList}
                    updateTask={updateTaskAndUpdateList}
                />
            </div>
        </div>
    );
};

export default App;