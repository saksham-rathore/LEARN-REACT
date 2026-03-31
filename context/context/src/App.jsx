import React, { useState } from "react";

const App = () => {
  
  const [counter, setCounter] = useState(0);

  const addvalue = () => {
    setCounter(counter + 1);
  };

  const decreaseValue = () => {
    setCounter(counter - 1);
  };

  const resetValue = () => {
    setCounter(0);
  };

  return (
    <div>
      <div className="container">
        <h1>Live Counter App</h1>
        <hr />

        <h2>
          Counter: <span id="count">{counter}</span>
        </h2>

        <div className="buttons">
          <button onClick={addvalue} className="btn increase">Increase</button>
          <button onClick={decreaseValue} className="btn decrease">Decrease</button>
          <button onClick={resetValue} className="btn reset">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default App;
