import React, { Component } from "react";
import { Route, Link, Redirect } from "react-router-dom"
import "./App.css";
import Meal from "./components/Meal";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mealsArray: []
    }
  }
  componentDidMount() {
    fetch("http://localhost:8080")
      .then(res => res.json())
      .then(res => {
        console.log(res, "Success");
        this.setState({ mealsArray: res })
      })
      .catch(err => {
        console.log(err, "Something's wrong")
      })
  }
  render() {
    const meals = this.state.mealsArray

    return (
      <div className="App">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Meals</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Categories</a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" />
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
        <div className="mealContainer">
          { meals.map(item => {
            console.log(item.meal)
            return (
              <Meal className="meal"
                key={ item.meal[0]._id }
                id={ item.meal[0].id }
                name={ item.meal[0].mealName }
                category={ item.meal[0].category }
                area={ item.meal[0].area }
                instructions={ item.meal[0].instructions }
                image={ item.meal[0].image }
                tags={ item.meal[0].tags }
                video={ item.meal[0].video }
                ingredients={ [
                  item.meal[0].ingredient1,
                  item.meal[0].ingredient2,
                  item.meal[0].ingredient3,
                  item.meal[0].ingredient4,
                  item.meal[0].ingredient5,
                  item.meal[0].ingredient6,
                  item.meal[0].ingredient7,
                  item.meal[0].ingredient8,
                  item.meal[0].ingredient9,
                  item.meal[0].ingredient10,
                  item.meal[0].ingredient11,
                  item.meal[0].ingredient12,
                  item.meal[0].ingredient13,
                  item.meal[0].ingredient14,
                  item.meal[0].ingredient15,
                  item.meal[0].ingredient16,
                  item.meal[0].ingredient17,
                  item.meal[0].ingredient18,
                  item.meal[0].ingredient19,
                  item.meal[0].ingredient20
                ] }
                measurements={ [
                  item.meal[0].measurement1,
                  item.meal[0].measurement2,
                  item.meal[0].measurement3,
                  item.meal[0].measurement4,
                  item.meal[0].measurement5,
                  item.meal[0].measurement6,
                  item.meal[0].measurement7,
                  item.meal[0].measurement8,
                  item.meal[0].measurement9,
                  item.meal[0].measurement10,
                  item.meal[0].measurement11,
                  item.meal[0].measurement12,
                  item.meal[0].measurement13,
                  item.meal[0].measurement14,
                  item.meal[0].measurement15,
                  item.meal[0].measurement16,
                  item.meal[0].measurement17,
                  item.meal[0].measurement18,
                  item.meal[0].measurement19,
                  item.meal[0].measurement20
                ] }
                source={ item.meal[0].source }
                dateModified={ item.meal[0].dateModified }
              />
            )
          }) }
        </div>
      </div>
    )
  }
}

export default App;
