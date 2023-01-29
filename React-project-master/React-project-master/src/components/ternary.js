import React, { useState } from "react";

const Ternary = () => 
{
  const [counter, setcounter] = useState(0);

  
  const countinc=()=>
{
    setcounter(counter + 1)
};

const countdecs=()=>
{
    setcounter(counter-1)
};

  return (
  <>
    <div >
      <h1>COUNTER: {counter}</h1>

   {(counter <=5) ? 
      <h1>STATUS:<span style={{color:"pink"}}>low</span></h1> 
    :
    (counter >5 && counter <=10) ?
    <h1>STATUS :<span style={{color:"blue"}}>medium</span></h1>
    :
    //  (counter >=10 )
    <h1>STATUS :<span style={{color:"yellow"}}>high</span></h1>
    }
    <button 
     style={{ backgroundColor: "green", color: "black" }}
     className="btn-primary"
      onClick={() => countinc()}
    >click to increase counter
    </button>

    <br/>

    <button 
     style={{ backgroundColor: "red", color: "black" }}
     className="btn-primary"
      onClick={() => countdecs()}
    >click to decrease counter
    </button>
    

      </div>
      </> );
};

export default Ternary;