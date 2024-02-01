import React from 'react'
import image from '../Homecomponents/imageHome/R.png'

function Right() {
  const style={
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  }
  const imageStyle={
    height: "100%",
    objectFit: "cover",
    
    position: "relative",
    bottom: "43px",
  }
  return (
    <div className="right" style={style}>
      <img  src={image} style={imageStyle} alt="" srcSet="" />
    </div>
  )
}

export default Right