import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [taskName, setTaskName] = useState('');

    const addTask = async() => {
        try{
            await axios.post(
                'http://localhost:3001/insert', 
                {
                    taskName: taskName,
                }
            )
        } catch(err) {
            console.warn("Axios post error: ", err);
        }
    };

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
            </div>
        </div>
    );
}

export default App;
