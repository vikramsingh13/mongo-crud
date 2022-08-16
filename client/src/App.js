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
        //todo
    }

    //takes id of task
    //updates task with crossing out the title and desc
    const completeTask = (id) => {
        //todo
        //utilizes updateTask
    }

    return (
        <div className='app'>
            <div className="app-container">
                <TaskAdd />
                <TaskList 
                    tasks={tasks}
                    deleteTask={deleteTask}
                />
            </div>
        </div>
    );
};

export default App;