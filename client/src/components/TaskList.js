import React from 'react';
import TaskCard from './TaskCard';

const TaskList = (props) => {
    const taskCards = props.taskList.map((task, key) => {
        return(
            <TaskCard task={task} key={key} />
        )
    });

    return(
        <div>
            {taskCards}
        </div>
    );
};

export default TaskList;