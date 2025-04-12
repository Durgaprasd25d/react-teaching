import React from "react";

const OnClickEventHandler = () => {
  const handleClick = () => {
    alert("Gadheda");
  };

  return (
    <div>
      <h3>
        <button onClick={handleClick}>Click Me</button>
      </h3>
    </div>
  );
};

export default OnClickEventHandler;
