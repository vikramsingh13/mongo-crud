import React, {useEffect, useState} from 'react';
import './TaskCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import {faCircleCheck, faCircleXmark, faPen} from "@fortawesome/free-solid-svg-icons";

library.add(faCircleCheck, faCircleXmark, faPen);

const TaskCard = (props) => {
    const [editTitle, setEditTitle] = useState('');
    const [editDesc, setEditDesc] = useState('');
    const [isEditVisible, setIsEditVisible] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const [taskId, setTaskId] = useState();

    useEffect(() => {
        setEditTitle(props.task.taskTitle);
        setEditDesc(props.task.taskBody);
        setIsComplete(props.task.isComplete);
        setTaskId(props.task._id);
    },[]);

    return (
        <div className='task-card'>
            <div className="task-card-wrapper">
                    <div className={`task-title ${props.task.isComplete?"task-complete":""}`}>
                        {props.task.taskTitle}
                    </div>
                <div className={`task-info ${props.task.isComplete?"task-complete":""}`}>
                    <div className='task-body'>
                        {props.task.taskBody}
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
                        onClick={(event)=>{
                            props.updateTask(taskId, editTitle, editDesc, !isComplete);
                            setIsComplete(!isComplete);
                        }}
                    />
                    <FontAwesomeIcon
                        className='task-controls-delete'
                        icon="circle-xmark"
                        type="button"
                        onClick={(event) => {
                            props.deleteTask(props.task._id);
                        }}
                    />
                </div>
                <div 
                    className={`task-edit ${!isEditVisible?"task-edit-hidden":""}`}
                >
                    <label className='task-edit-title-label'>New title: </label>
                    <input 
                        className='task-edit-title'
                        placeholder='Enter new title'
                        maxLength="20"
                        required
                        title='Required'
                        value={editTitle}
                        onChange={(event)=>setEditTitle(event.target.value)}
                    />
                    <label className='task-edit-desc-label'>New description: </label> 
                    <textarea 
                        className='task-edit-desc'
                        placeholder='Enter new description'
                        maxLength="200"
                        value={editDesc}
                        onChange={(event)=>setEditDesc(event.target.value)}
                    />
                    <label className='task-edit-due-date-label'>New due date: </label>
                    <div className='task-edit-due-date'>
                        This is due date.
                    </div>
                    <button 
                        type="submit"
                        onClick={(event)=>{
                            props.updateTask(taskId, editTitle, editDesc, isComplete);
                            setIsEditVisible(false);
                        }}
                    >
                        Confirm Edit
                    </button>
                </div>
            </div>            
        </div>
    );
};

export default TaskCard;