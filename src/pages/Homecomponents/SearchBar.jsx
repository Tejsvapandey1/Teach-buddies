import React from 'react'

function SearchBar() {

  const color={
    color:"background: rgba(168, 168, 168, 1)",
    padding:"2% 0 2% 0"
  }
  return (
    <>
    <div className="container-sm input-group mb-3"  style={color}>
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon1"
          
        >
          Button
        </button>
        <input
       
          type="text"
          className="form-control"
          placeholder="Find the perfect match for your learning journey..."
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
      </div></>
  )
}

export default SearchBar