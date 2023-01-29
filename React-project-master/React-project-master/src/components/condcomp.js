import React, { useState, useEffect } from "react";

const CondComp = () => {

const[isComplete, setisComplete]=useState (false);
useEffect(()=>{
setisComplete(true);
},[]);

return(
    <div>
        {isComplete===true? 
        (
            <>
            <h1>
                Full stack developer @Amazon | Graphics Designer| Fitness freak
            </h1>
            </>
        ) : (
          <>
            <h1> Your profile is incomplete</h1>
            <p>complete Profile</p>
            </>
        ) }
    <button onClick={()=> setisComplete(!isComplete)}>Edit Profile</button>
    </div>
);
};
export default CondComp;
