import React, { useState } from "react";

const Clock = () => {
  const [time, settime] = useState(new Date().toLocaleTimeString());
  const [day] = useState(new Date().toLocaleDateString());

  const updatetime = () => {
    settime(new Date().toLocaleTimeString());
  };

  setInterval(() => {
    updatetime();
  }, 1000);
  return (
    <div>
      <h1>
        Current Time is <span style={{ color: "red" }}> {time} </span>
      </h1>
      <h1>
        Current Date is <span style={{ color: "red" }}>{day} </span>
      </h1>
    </div>
  );
};

export default Clock;