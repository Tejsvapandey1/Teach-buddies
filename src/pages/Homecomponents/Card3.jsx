import React from "react";

function Card3() {
  // const [item1, setItem1] = useState();
  function handleClick(e) {
    e.classList.add("checked");
  }
  const style={
    fontFamily: "Lato",
fontSize: "20px",
fontHeight:" 600",
lineHeight: "24px",
letterSpacing:" 0em",
textAlign: "left",
color: "rgba(102, 102, 102, 1)"

  }
  return (
    <>
      <div className="card col mx-2 my-2 shadow-sm" style={{ width: "13rem" }}>
        <div className="card-body">
          <div className="container card3title d-flex justify-content-between">
            <div id="Name" style={{marginLeft: "-14px"}}>
              <h5 style={{color:" rgba(51, 51, 51, 1)"}}>Tejsva Pandey</h5>
            </div>
            <div className="5star">
              <span onClick={handleClick} class="fa fa-star"></span>
              <span class="fa fa-star "></span>
              <span class="fa fa-star "></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
          </div>
          <p className="card-text" style={style}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          
        </div>
      </div>
    </>
  );
}

export default Card3;
