import React, { useEffect, useState } from "react";

const PracticeEffect=() =>{
    const [username, setusername] = useState("");
  useEffect(()=>{
    alert("hey client");
  },[])
  return(
<>
<h1>
    hello{username}
</h1>
</>
  );
};
export default  PracticeEffect;