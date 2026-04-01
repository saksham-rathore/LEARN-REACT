import React, { useState } from "react";

const App = () => {
  const [Add, setAdd] = useState("");
  const [Tasks, setTasks] = useState([]);

  // Add Task
  const addtask = () => {
    if (Add === "") return;

    setTasks([...Tasks, Add]); // 🔥 state update
    setAdd(""); // input clear
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a new task"
          value={Add}
          onChange={(e) => setAdd(e.target.value)}
        />

        <button onClick={addtask} className="add-btn">
          Add Task
        </button>
      </div>

      {/* ✅ Dynamic List */}
      <div className="task-list">
        {Tasks.map((task, index) => (
          <div className="task" key={index}>
            <input type="checkbox" />
            <span>{task}</span>
            <button className="delete-btn">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;