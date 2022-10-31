import React, {useState} from 'react';
import './TaskAdd.css';

const TaskAdd = (props) => {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskBody, setTaskBody] = useState('');

    const handleSubmit = async() => {
        await props.addTask(taskTitle, taskBody);
        setTaskTitle("");
        setTaskBody("");
    }
    
    return(
        <div className='task-add'>
            <label className='task-add-title-label'>Task label : </label>
            <input 
                className='task-add-name-input' 
                type='text'
                placeholder='Add a task name'
                onChange={(event) => setTaskTitle(event.target.value)}
                value={taskTitle}
                maxLength="20"
                title="Required"
                required
            />
            <label className='task-add-body-label'>Task label : </label>
            <input 
                className='task-add-name-input' 
                type='text'
                placeholder='Add description (Optional)'
                onChange={(event) => setTaskBody(event.target.value)}
                value={taskBody}
                maxLength="200"
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