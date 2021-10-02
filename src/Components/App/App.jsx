import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Chapter1 from "../Chapter1/Chapter1"
import Home from "../Home/Home"
import NavBar from "../NavBar/NavBar"

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/chapter-1">
          <Chapter1 />
        </Route>
        <Route path="/lion">
          <h1>
            <span role="img" aria-label="emoji">
              🦁
            </span>
          </h1>
        </Route>
        <Route path="/tiger">
          <h1>
            <span role="img" aria-label="emoji">
              🐯
            </span>
          </h1>
        </Route>
        <Route path="/">
          <h1>
            <Home />
          </h1>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
