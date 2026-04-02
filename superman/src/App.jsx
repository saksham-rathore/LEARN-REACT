import { useState } from "react";
import React from "react";

const App = () => {
  const [Tasks, setTasks] = useState("");
  const [AddTask, setAddTask] = useState([]);

  const addTask = () => {

    setAddTask((AddTask) => {
      const updatedlist = [...AddTask, Tasks]
      console.log(updatedlist);
      setTasks('');
      return updatedlist
    })
  };

  function removelist(i) {
    const updatedlistdata = AddTask.filter((elem, id) =>{
      return i !== id;
    })
    setAddTask(updatedlistdata);
  }

  return (
    <>
      <div className="flex justify-center items-center mt-15">
        <div className="h-200 w-200 bg-blue-100 bg-gradient-to-br from-slate-400 to-blue rounded-xl">
          <div className="mx-auto mt-25 h-150 w-150 bg-gradient-to-br from-slate-500 to-blue rounded-xl shadow-2xl border-2xl">
            <div className="items-center justify-center text-center">
              <input
                type="text"
                placeholder="Search notes..."
                className="border-2 rounded-xl w-140 h-10 mt-10"
              />
              <div>
                <input
                  type="text"
                  placeholder="Enter your note"
                  value={Tasks}
                  onChange={(e) => setTasks(e.target.value)}
                  className="border-2 rounded-xl w-100 mt-10 h-10"
                />
                <button
                  className="border-2 rounded-xl h-10 mx-10 w-30"
                  onClick={addTask}
                >
                  Add Note
                </button>
              </div>
              <div className="border-2 rounded-xl w-100 mt-10 h-10">
                {AddTask!=[] && AddTask.map((data, i) => {
                  return(
                    <React.Fragment key={i}>
                    <h1>
                      <div>{data}</div>
                      <div>
                        <button onClick={() => removelist(i)}>
                          Remove
                        </button>
                      </div>
                    </h1>
                    </React.Fragment>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
