import React, {useState} from 'react';
import './TaskCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import {faCircleCheck, faCircleXmark, faPen} from "@fortawesome/free-solid-svg-icons";

library.add(faCircleCheck, faCircleXmark, faPen);

const TaskCard = (props) => {
    const [editTitle, setEditTitle] = useState('');
    const [isEditVisible, setIsEditVisible] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    return (
        <div className='task-card'>
            <div className={`task-info ${isComplete?"task-complete":""}`}>
                <div className='task-title'>
                    {props.task.taskTitle}
                </div>
                <div className='task-desc'>
                    This is task description.
                </div>
                <div className='task-due-date'>
                    This is due date.
                </div>
            </div>
            <div className='task-controls'>
                <FontAwesomeIcon
                    className='task-controls-edit'
                    icon="pen"
                    type="button"
                    id={props.task._id}
                    onClick={()=>setIsEditVisible(!isEditVisible)}
                />
                <FontAwesomeIcon
                    className='task-controls-complete'
                    icon="circle-check"
                    type="button"
                    onClick={()=>setIsComplete(!isComplete)}
                />
                <FontAwesomeIcon
                    className='task-controls-delete'
                    icon="circle-xmark"
                    type="button"
                    id={props.task._id}
                    onClick={(event) => {props.deleteTask(event.target.id)}}
                />
            </div>
            <div 
                className={`task-edit ${!isEditVisible?"task-edit-hidden":""}`}
            >
                <label className='task-edit-title-label'>New title: </label>
                <input 
                    className='task-edit-title' 
                    placeholder='Enter new title'
                    value={editTitle}
                    onChange={(event)=>setEditTitle(event.target.value)}
                />
                <label className='task-edit-desc-label'>New description: </label> 
                <div className='task-edit-desc'>
                    This is task description.
                </div>
                <label className='task-edit-due-date-label'>New due date: </label>
                <div className='task-edit-due-date'>
                    This is due date.
                </div>
                <button 
                    type="button"
                    id={props.task._id}
                    onClick={(event)=>{
                        props.updateTask(event.target.id, editTitle);
                        setEditTitle("");
                        setIsEditVisible(false);
                    }}
                >
                    Confirm Edit
                </button>
            </div>

        </div>
    );
};

export default TaskCard;