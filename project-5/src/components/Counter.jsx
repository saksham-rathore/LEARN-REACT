import { useState } from "react";
import React from "react";

const Counter = () => {
  const [Counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(Counter + 1);
  };

  const decrement = () => {
    setCounter(Counter - 1);
  };
  
  const Reset = () => {
    setCounter(0);
  };
  return (
    <div className="w-100 h-100 flex border rounded-xl justify-center">
      <div className="text-6xl">
        <h1>Counter App</h1>
        <h1 className="flex justify-center items-center pt-10">{Counter}</h1>
      <div className="text-4xl border-2 border-black rounded-xl m-2" onClick={increment}>
        <button>Increment</button>
      </div>
      <div className="text-4xl border-2 border-black rounded-xl m-2" onClick={decrement}>
        <button>decrement</button>
      </div>
      <div className="text-4xl border-2 border-black rounded-xl m-2" onClick={Reset}>
        <button>Reset</button>
      </div>
      </div>
    </div>
  );
};

export default Counter;
