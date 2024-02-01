import React from "react";
import image from "../Homecomponents/imageHome/R.jpg";

function Card1() {
  const card = {
    width: "18rem",
    background: " rgba(248, 248, 253, 1)",
    boxShadow: "2px 4px 7px 0px rgba(147, 112, 219, 0.25)",
    borderRadius: "40px",
    overflow: "hidden",
    position: "relative",
  };
  const icon = {
    border: "0.5px solid rgb(106, 90, 205)",
    width: "2rem",
    position: "absolute",
    top: "5.5rem",
    left: "40%",
  };
  const text1 = {
    fontFamily: "Lato",
    fontSize: "25px",
    fontWeight: "700",
    lineHeight: "30px",
    letterSpacing: "0em",
    textAlign: "center",
    paddingBottom: "40px",
    color: "rgba(51, 51, 51, 1)",
  };
  const text2 = {
    color: "rgba(102, 102, 102, 1)",
    fontFamily: "Lato",
    fontSize: "21px",
    fontWeight: "400",
    lineHeight: "25px",
    letterSpacing: "0em",
    textAlign: "center",
  };
  return (
    <>
      <div className="card my-2 mx-2" style={card}>
        <div className="card-body">
          <h5 className="card-title text-center" style={text1}>
            Personalized learning journey
          </h5>
          <div className="icon text-center" style={icon}>
            hi
          </div>
          <p className="card-text" style={text2}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </>
  );
}

export default Card1;
