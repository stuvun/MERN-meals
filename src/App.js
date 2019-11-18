import React, { Component } from "react";
import { Link, Route } from "react-router-dom"
import "./App.css";
import Mealdata from "./components/Mealdata";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <nav className="navbar-brand" href="#">Navbar</nav>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <Link to="/">
                <li className="nav-item active">
                  <nav className="nav-link" href="#">Home</nav>
                </li>
              </Link>
              <Link to="/meals">
                <li className="nav-item">
                  <nav className="nav-link" href="#">Meals</nav>
                </li>
              </Link>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
        <Route path="/"
          exact component={ Home }>
        </Route>
        <Route path="/meals"
          exact component={ Mealdata }>
        </Route>
      </div>
    )
  }
}

export default App;
