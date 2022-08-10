import React from 'react';

const TaskCard = (props) => {
    return(
        <div className="task-card">
            {props.task.taskName}
        </div>
    );
};

export default TaskCard;