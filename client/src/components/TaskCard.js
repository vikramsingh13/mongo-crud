import React from 'react';
import './TaskCard.css';

const TaskCard = (props) => {
    return (
        <div className='task-card'>
            <div className='task-info'>
                <div className='task-name'>
                    {props.task.taskTitle}
                </div>
                <div className='task-description'>
                    This is task description.
                </div>
                <div className='task-due-date'>
                    This is due date.
                </div>
            </div>
            <div className='task-controls'>
                <button 
                    type="button"
                    id={props.task._id}
                >
                    Edit
                </button>
                <button type="button">Complete</button>
                <button 
                    type="button"
                    id={props.task._id}
                    onClick={(event) => {props.deleteTask(event.target.id)}}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TaskCard;