import React from "react";

function Left() {
  const stylehead = {
    fontFamily: "Lato",
    fontSize: "66px",
    fontWeight: "800",
    lineHeight: "79px",
    color: "rgba(147, 112, 219, 1)",
    letterSpacing: "0em",
    textAlign: "left",
    flex:"1"
  };

  const stylebtn = {
    width: "263px",
    height: "71px", 
    top: "264px",
    background: "rgba(147, 112, 219, 1)",
    border: "none",
    left: "152px",
    fontSize:"25px",
    lineHeight:"36px",
    borderRadius: "32px",
   
  };

  return (
    <div className="left col">
      <h1 className="mx-2 my-2 row" style={stylehead}>
        Welcome to Teach Buddies!
      </h1>
      <h5 style={{color: "rgba(102, 102, 102, 1)",flex:"1",maxWidth:"43vw"
}} className="mx-2 my-2 row">
        Hey There! Welcome to your premier destination for collaborative
        learning! Explore the endless possibilities of connecting with tutors
        and learners!
      </h5>
      <div className="row mx-2 " style={{flex:"1"}}><button className="my-2 text-light " style={stylebtn}>
        Get Started
      </button></div>
      
    </div>
  );
}

export default Left;
