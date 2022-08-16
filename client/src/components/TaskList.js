import React from 'react';
import TaskCard from './TaskCard';
import getTasks from './ApiCalls';


const TaskList = (props) => {
    /*let renderedTasks = props.tasks.data.map((task) => {
        return (
            <TaskCard id={task._id} key={task._id}/>
        );
    });*/
    return(
        <div>
            task list
        </div>
    );
}


/*
const TaskList = (props) => {
    const renderedTasks = (async() => {
        const tasks = await getTasks();
        let renderedTasks = tasks.data.map((task) => {
            return <TaskCard id={task._id} key={task._id} />
        });
        return renderedTasks;
    })();
    return (
        <div className="task-list">
            {renderedTasks}
        </div>
    );
};
*/

export default TaskList;