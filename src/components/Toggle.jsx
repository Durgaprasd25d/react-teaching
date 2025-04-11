import React, { useState } from "react";

const Toggle = () => {
  const [ison, setIsOn] = useState(false);
  return (
    <>
      <div className="text-center p-6">
        <h1 className="text-xl mb-4">Status {ison ? "ON" : "OFF"}</h1>
        <button
          onClick={() => setIsOn(!ison)}
          className={`px-4 py-2 text-white rounded ${
            ison ? "bg-green-500" : "bg-gray-500"
          }`}
        >
          Toggle
        </button>
      </div>
    </>
  );
};
export default Toggle;
