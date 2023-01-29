import React, {useState} from "react";

const Test = () => {
    const [title, settitle] = useState("");

return (
 
<div>
    <h1>THE TITLE IS {title}</h1>
    <button onClick={()=> settitle("Aditya")}></button>
</div>

);
};

export default Test;
