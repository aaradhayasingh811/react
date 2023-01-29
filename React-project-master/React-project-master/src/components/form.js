import React from "react";

const Form = ()=> {
    return (
    <> 
    <h1>Hello this is your form</h1>

<form>
<label for="fname">First name:</label>
<input type="text" id="fname" name="fname"/>
<label for="lname">Last name:</label>
<input> type="text" id="lname" name="lname"</input>
<input> type="radio" id="html" name="fav_language" value="HTML"</input>
  <label for="html">HTML</label>
  <input> type="radio" id="css" name="fav_language" value="CSS"</input>
  <label for="css">CSS</label>
  <input> type="radio" id="javascript" name="fav_language" value="JavaScript"</input>
  <label for="javascript">JavaScript</label>
</form> 

</>
)

};
 export default Form;