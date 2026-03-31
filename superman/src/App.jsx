import { useState } from "react";
import React from "react";

const App = () => {
  const [Add, setAdd] = useState("");
  const [Tasks, setTasks] = useState([]);

  const addtask = () => {
    if (!Add) {
      console.log("error");
    }
    console.log(Add);
  };

  const Tasks = () => {
    const updatedlist = [...Tasks, Add]
    console.log(updatedlist)
    return updatedlist;
  }

  ;

  return (
    <div>
      <div className="container">
        <h1>To-Do List</h1>

        <div className="input-section">
          <input
            onChange={(e) => setAdd(e.target.value)}
            type="text"
            placeholder="Enter a new task"
          />
          <button onClick={addtask} className="add-btn">
            Add Task
          </button>
          {Tasks! = [] && Tasks.map((data, i))}
        </div>

        <div value={addtasks}>
          <div className="task-list">
            <div className="task">
              <input type="checkbox" />
              <span className="completed">go gym</span>
              <button className="delete-btn">Delete</button>
            </div>

            <div className="task">
              <input type="checkbox" />
              <span>Read a book</span>
              <button className="delete-btn">Delete</button>
            </div>

            <div className="task">
              <input type="checkbox" />
              <span>Go for a walk</span>
              <button className="delete-btn">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
