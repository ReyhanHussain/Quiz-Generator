import React from 'react'
import { a } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navOuterContainer">
      <span>Quiz.App</span>

      <div className="navRootOptions">
        <a to="/how-it-works">How it Works</a>
        <a to="/features">Features</a>
        <a to="/examples">Examples</a>
      </div>

      <button>Login</button>
    </div>
  )
}

export default Navbar