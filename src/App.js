import React, { Component } from "react";
import "./App.css";
import Meal from "./components/Meal";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      meals: []
    }
  }
  componentDidMount() {
    fetch("http://localhost:8080")
      .then(res => res.json())
      .then(res => {
        console.log(res, "Success");
        this.setState({ meals: res })
      })
      .catch(err => {
        console.log(err, "Something's wrong")
      })
  }
  render() {
    const meals = this.state.meals
    .map((key, index) => (
      <Meal
        name={ key.mealName }
        image={ key.image }
        id={ key.id }
        key={ index }
      />
    ))

    return (
      <div className="App">
        <div className="meals">{ meals }</div>
        <Meal />
      </div>
    )
  }
}

export default App;
