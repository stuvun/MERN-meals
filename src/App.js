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
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
