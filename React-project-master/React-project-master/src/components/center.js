import React, { useState } from "react";

const Center = () => {
  const [counter, setcounter] = useState(0);
  
  const handleincrement = () => {
    setcounter(counter + 1);
    };
  const handledecrement = () => {
    setcounter(counter - 1);
    };
  return (
    <>
      <h1>
        Current Counter : <span style={{ color: "blue" }}>{counter}</span>
      </h1>

      <div className="row">
        <div className="col">
          <button
            style={{ backgroundColor: "green", color: "white" }}
            className="btn-primary"
            onClick={() => handleincrement()}
          >
            Increase counter
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button
            style={{ backgroundColor: "red", color: "white" }}
            className="btn-primary"
            onClick={() => handledecrement()}
          >
            Decrease counter
          </button>
        </div>
      </div>
    </>
  );
};

export default Center;