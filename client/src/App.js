import React, { useEffect } from 'react';
import TaskList from './components/TaskList';
import getTasks from './components/ApiCalls';

const apiCalls = async() => {
    const tasks = await getTasks();
    console.log(tasks);
}

const App = () => {
    apiCalls();
    return (
        <div>
            <TaskList />
        </div>
    );
};

export default App;