import React from "react";
import Header from "./Homecomponents/Header";
import Left from "./Homecomponents/Left";
import Right from "./Homecomponents/Right";
import Card1 from "./Homecomponents/Card1";
import SearchBar from "./Homecomponents/SearchBar";
import Card2 from "./Homecomponents/Card2";
import Card3 from "./Homecomponents/Card3";
import Card4 from "./Homecomponents/Card4";

function Home() {
  const head1style = {
    color: " rgba(147, 112, 219, 1)",
    fontFamily: "Lato",
    fontSize: "29px",
    fontWeigth: "800",
    lineHeight: "35px",
    letterSpacing: "0em",
    textAlign: "left",
    padding: "3% 0 2% 0",
  };
  const footerStyle = {
    display: "flex",
    background:
      "linear-gradient(90deg, rgba(204, 183, 247, 0) -4.79%, rgba(147, 112, 219, 0.28) 50.45%, rgba(204, 183, 246, 0) 105.46%),linear-gradient(0deg, #E9E9FF, #E9E9FF)",
    justifyContent: "center",
    alignItems: "center",
    gap: "5%",
    font:"Lato",
    
  };
  const linkStyle={
    cursor:"pointer",
    textDecoration:"none",
    color:"inherit"
  }
  


  return (
    <>
      <Header />
      {/* <hr /> */}
      <div className="container-fluid top d-grid " style={{gridTemplateColumns:"auto auto",justifyContent:"space-around"}}>
       
        <Left />
        <Right />
      </div>
      <div className="text-center" style={head1style}>
        Discover a platform designed for seamless educational interactions &
        growth!
      </div>
      <div  className="row card1-container container-fluid my-3">
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
      </div>

      <SearchBar />
      <div className="text-center" style={head1style}>
        Featured Tutors
      </div>
      <div className="card1-container container-fluid row">
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
      </div>
      <div className="container-fluid text-center" style={head1style}>
        Students Testimonials
      </div>
      <div className="container-fluid row">
        <Card3 />
        <Card3 />
      </div>
      <div className="container-fluid row">
        <Card3 />
        <Card3 />
      </div>
      <div className="container-fluid text-center" style={head1style}>
        How it works
      </div>
      <div className="container-fluid row " style={{paddingTop:"15vh",paddingBottom:"15vh"}}>
        <Card4 />
        <Card4 />
        <Card4 />
      </div>
      <div className="footer" style={footerStyle}>
        <div className="container-sm fcontent d-flex justify-content-center align-items-center"style={{gap:'4%'}} >
          <a href="/contactUs" style={linkStyle}>Contact Us</a>
          <a href="/Terms" style={linkStyle}>Terms Of Service </a>
          <a href="/Privacy" style={linkStyle}>Privacy Policy</a>
        </div>
      </div>
    </>
  );
}

export default Home;
