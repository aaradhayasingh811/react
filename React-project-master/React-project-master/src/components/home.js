import React from "react";

const home = () => {
  let name;
  let comments;
  let likes;
  let view;
  let share;

  const ClickToSee = () => {
    console.log("Here is your profile insight")
  };


  name = "Aditya kanojia";
  comments = "cool";
  likes = 100;
  view = 150;
  share = 5;

  return (
    <>
      <h1>Name= {name} </h1>
      <p>Comments= {comments}</p>
      <p>No of views : {view} </p>
      <p>Likes on your post : {likes} </p>
      <p>Shares on your post : {share} </p>

      <button
        onClick={() => { ClickToSee ();  }}
         className="btn btn-done" >more info </button>
    </>
  );
    };

    export default home;