import "./NavBar.scss"

import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-bar__container">
        <Link to="/" className="nav-bar__main-title">
          ML NOTES
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
