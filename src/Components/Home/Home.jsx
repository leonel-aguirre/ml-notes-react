import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <ul>
      <li>
        <Link to="/chapter-1">Chapter 1</Link>
      </li>
      <li>
        <Link to="/lion">
          Lion{" "}
          <span role="img" aria-label="emoji">
            🦁
          </span>
        </Link>
      </li>
      <li>
        <Link to="/tiger">
          Tiger{" "}
          <span role="img" aria-label="emoji">
            🐯
          </span>
        </Link>
      </li>
    </ul>
  )
}

export default Home
