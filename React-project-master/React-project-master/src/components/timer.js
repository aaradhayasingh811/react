import React, { useState } from "react";

const Timer = () => {
  const [counter, setcounter] = useState(0);
  let interval;
  let i = 1;
  const starttimer = () => {
    interval = setInterval(() => {
      setcounter(i);
      i++;
    }, 1000);
  };

  const stoptimer = () => {};
  const resettimer = () => {
    setcounter(0);
    stoptimer(interval);
    i = 0;
  };
  return (
    <>
      <h1 style={{ color: "grey" }}>
        Timer : <span style={{ color: "blue" }}>{counter} seconds</span>
      </h1>

      <div className="row">
        <div className="col">
          <button
            style={{ backgroundColor: "green", color: "white" }}
            className="btn-primary"
            onClick={() => starttimer()}
          >
            Start Timer
          </button>
        </div>
        <div className="col">
          <button
            style={{ backgroundColor: "red", color: "white" }}
            className="btn-primary"
            onClick={() => stoptimer()}
          >
            Stop timer
          </button>
        </div>
        <div className="col">
          <button
            style={{ backgroundColor: "yellow", color: "black" }}
            className="btn-primary"
            onClick={() => resettimer()}
          >
            Reset timer
          </button>
        </div>
      </div>
    </>
  );
};

export default Timer;
