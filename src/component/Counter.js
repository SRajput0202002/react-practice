import React, { useState } from "react";

const Counter = () => {
  let [counter, setCounter] = useState(1);

  const addValue = () => {
    setCounter(counter + 1);
  };
  const removeValue = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <h1>My Practice Conter: {counter}</h1>
      <button onClick={addValue}>Increase</button>
      <button onClick={removeValue}>Decrease</button>
    </div>
  );
};

export default Counter;
