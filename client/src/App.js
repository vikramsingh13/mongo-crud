import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import {getTasks, deleteTask} from './api/ApiCalls';


const App = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const callApi = async() =>{
            const taskList = await getTasks();
            setTasks(taskList.data);
        };
        callApi();
    }, []);



    return (
        <div>
            <TaskList 
                tasks={tasks}
                deleteTask={deleteTask}
            />
        </div>
    );
};

export default App;