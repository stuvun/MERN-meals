import React, { Component } from "react";
import { Link, Route } from "react-router-dom"
import axios from "axios";
import "./App.css";
import Home from "./components/Home/Home";
import Mealsdata from "./components/Meals/Mealdata";
import Singlemeal from "./components/Meals/Singlemeal";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }
  
  handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/meals/:id", {
        name: this.state.name
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.name)
  };
  
  handleInput = e => {
    e.preventDefault();
    console.log({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light">
          <nav className="nav-link navbar-brand" href="#">Recipes</nav>
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
                  <nav className="nav-link" href="#">All Meals</nav>
                </li>
              </Link>
            </ul>
            <form className="form-inline my-2 my-lg-0" type="form">
              <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
        <Route path="/"
          exact component={ Home }>
        </Route>
        <Route path="/meals"
          exact component={ Mealsdata }>
        </Route>
        <Route path="/meals/:name"
          exact component={ Singlemeal }>
        </Route>
      </div>
    )
  }
}

export default App;
