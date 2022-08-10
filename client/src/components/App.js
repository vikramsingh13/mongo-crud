import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import TaskList from './TaskList';

const App = () => {
    const [taskName, setTaskName] = useState('');
    const [taskList, setTaskList] = useState([]);

    const getTasks = async() => {
        try{
            await axios.get(
                'http://mongo-crud.vikramsingh.tech/read'
            ).then((response) => {
                setTaskList(response.data);
            });
        }catch(err){
            console.warn("Axios get error: ", err);
        }
    };
    const addTask = async() => {
        try{
            await axios.post(
                'http://mongo-crud.vikramsingh.tech/insert', 
                {
                    taskName: taskName,
                }
            )
        } catch(err) {
            console.warn("Axios post error: ", err);
        }
    };

    //gets the tasks from the backend and adds to state
    useEffect(()=>{
        getTasks();
    }, []);

    return (
        <div className="App">
            <div className="app-container">
                <div className="app-heading">
                    Task Manager
                </div>
                <div className="app-insert-form">
                    <label className="app-label">Task Name:</label>
                    <input 
                        type="text" 
                        className="app-input"
                        onChange={(event) => setTaskName(event.target.value) }
                    />
                    <button 
                        className="app-insert-button"
                        onClick={addTask}
                    >
                        Add Task
                    </button>
                </div>

                <TaskList taskList={taskList}/>
            </div>
        </div>
    );
}

export default App;
