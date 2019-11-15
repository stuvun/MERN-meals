import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      meals: ""
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
    let meals = this.state.meals
    return (
      <div className="App">
        {/* <div>{ meals }</div> */}
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
