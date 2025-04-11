import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Counter Already at Zero");
    }
  };

  return (
    <div className="text-center p-6">
      <button
        onClick={decrement}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Decrement
      </button>
      <h1 className="text-2xl font-bold mb-4">Counter : {count}</h1>
      <button
        onClick={increment}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
