import { useState, useCallback, useEffect, useMemo } from "react";

const App = () => {
  const [Length, setLength] = useState(8);
  const GeneratedPassword = useMemo(() => {
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if (Number) str += "1234567890";
    if (Char) str += "~!@#$%^&*()_+{}:";

    let result = "";
    for (let i = 0; i < Length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      result += str.charAt(charIndex);
    }
    return result;
  }, [Length, Number, Char]);
  return (
    <>
      <div>
        <div className="align-center text-center text-6xl">
          <h1>Password Generator</h1>
        </div>
        <input
          type="text"
          className="w-full py-1 px-3 flex justify-center items-center border-black border-2"
          value={GeneratedPassword}
          readOnly
          placeholder="password"
        />
      </div>
      <div>
        <input
          type="range"
          min={8}
          max={50}
          value={Length}
          className="cursor-pointer"
          onChange={(e) => {
            setLength(Number(e.target.value));
          }}
        />
        <label>Length: {Length}</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={Number}
          id="numberInput"
          onChange={() => {
            setNumber((prev) => !prev);
          }}
        />
        <label>Number</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={Char}
          id="CharInput"
          onChange={() => {
            setChar((prev) => !prev);
          }}
        />
        <label>Char</label>
      </div>
    </>
  );
};

export default App;
