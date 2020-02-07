import React, { Component } from "react";
import logo from "./Logo/Air_Ball_Logo.jpg";
import Events from "./pages/Events";
import Nav from "./components/Nav";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Air Ball</h2>
          </div>

          <Nav />
        </div>
      </div>
    );
  }
}

export default App;
