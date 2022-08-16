import React from 'react';
import TaskCard from './TaskCard';
import './TaskList.css';



const TaskList = (props) => {
    const renderedTasks = props.tasks.map((task) => {
        return <TaskCard task={task} key={task._id} />
    });
    return(
        <div className='task-list'>
            {renderedTasks}
        </div>
    );
}

export default TaskList;