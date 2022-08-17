import React, {useState} from 'react';
import './TaskAdd.css';

const TaskAdd = (props) => {
    const [taskName, setTaskName] = useState('');

    const handleSubmit = async() => {
        await props.addTask(taskName);
        setTaskName("");
    }
    
    return(
        <div className='task-add'>
            <label className='task-add-label'>Task name : </label>
            <input 
                className='task-add-input' 
                type='text'
                placeholder='Add a task name'
                onChange={(event) => setTaskName(event.target.value)}
                value={taskName}
                maxLength="20"
                title="Required"
                required
            />
            <button 
                type="submit"
                onClick={()=>handleSubmit()}
            >
                Add Task
            </button>
        </div>
    )
}

export default TaskAdd;