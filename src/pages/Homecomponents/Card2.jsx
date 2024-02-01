import React from "react";


function Card2() {
  const size = {
    width: "18rem",
    height: "419px",
    borderRadius: " 40px",
    justifyContent:"center",
    alignItems:"center"
  };
  const sizeCircle = {
    width: " 158px",
    height: " 151px",
    margin:"9%",
    borderRadius: "50%",
    backgroundColor: "rgba(248, 248, 253, 1)",
  };
  return (
    <>
      <div className="card mx-2 my-2" style={size}>
        <div style={sizeCircle}></div>
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </>
  );
}

export default Card2;
