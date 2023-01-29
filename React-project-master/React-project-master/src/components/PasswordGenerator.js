import React, { useState } from "react";

const PasswordGenerator = () => {
  const [password, setpassword] = useState("3@32(*~!@");
  const generatepass = () => {
    let x = Math.random() * 100000000;
    setpassword(Math.floor(x));
  };
  return (
    <div>
      <p style={{ color: "black" }}>
        Use the Strong Password Generator to create highly secure passwords that
        are difficult to crack or guess. Just select the criteria for the
        passwords you need and copy and paste.
      </p>
      <h1>
        {" "}
        Your generated password is{" "}
        <span style={{ color: "yellow" }}>{password} </span>{" "}
      </h1>
      <button
        onClick={() => generatepass()}
        style={{ backgroundColor: "green" }}
      >
        Generate
      </button>
    </div>
  );
};

export default PasswordGenerator;