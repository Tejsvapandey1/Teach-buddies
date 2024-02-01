import React from "react";

function Card4() {
  const sizeCircle = {
    width: " 158px",
    height: " 151px",

    borderRadius: "50%",
    backgroundColor: "rgba(248, 248, 253, 1)",
    top: "-80px",
    position:"absolute"
  };
  return (
    <>
      <div
        className="card col mx-2 my-2 d-flex shadow-sm"
        style={{
          width: "15rem",
          flexDirection: "column",
          alignItems: "center",
          position:"relative"
        }}
      >
        <div class="card-body d-flex" style={{paddingTop:"20vh",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
          <div style={sizeCircle}></div>
          <h5 class="card-title my-3 ">Card title</h5>
          
          <p class="card-textmy-3 text-center " style={{font:"Lato"}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          
        </div>
      </div>
    </>
  );
}

export default Card4;
