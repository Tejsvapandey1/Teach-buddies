import React from 'react'

function Header() {
  const style={
    width: "134px",
height: "43px",
top: "64px",
left: "1236px",
borderRadius: "32px"

  }
  return (
    <>
    <div className="Header">
        <div className="logo">Logo</div>
        <div className="auth">
          <button className="mx-2" style={style}>login</button>
          <button className="mx-2" style={style}>signup</button>
        </div>
      </div>
    </>
  )
}

export default Header