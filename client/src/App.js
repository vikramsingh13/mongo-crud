import React, {useState} from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <div className="app-heading">
            Task Manager
        </div>
        <div className="app-insert-form">
            <label className="app-label">Task Name:</label>
            <input type="text" className="app-input" />
            <button className="app-insert-button">Add Task</button>
        </div>
      </div>
    </div>
  );
}

export default App;
