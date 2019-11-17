import React, { Component } from "react";
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
        <div className="meal">
          { meals.map(item => {
            console.log(item.meal)
            return(
              <Meal
              key={ item.meal[0]._id }
              name={ item.meal[0].mealName }
              image={ item.meal[0].image }
              id={ item.meal[0].id }
            />
            )
            
          }) }
        </div>
      </div>
    )
  }
}

export default App;
