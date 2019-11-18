import React, { Component } from "react";
import { Router, Link, Route } from "react-router-dom"
import "./App.css";
import Mealdata from "./components/Mealdata";
import Home from "./components/Home";

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <Link to="/">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home</a>
                </li>
              </Link>
              <Link to="/meals">
                <li class="nav-item">
                  <a class="nav-link" href="#">Meals</a>
                </li>
              </Link>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" />
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
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
