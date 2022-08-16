import React from 'react';
import TaskCard from './TaskCard';



const TaskList = (props) => {
    const renderedTasks = props.tasks.map((task) => {
        return <TaskCard id={task._id} key={task._id} />
    });
    return(
        <div>
            {renderedTasks}
        </div>
    );
}

export default TaskList;