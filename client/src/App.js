import React, { Component } from "react";
import logo from "./logo.jpg";
import Events from "./pages/Events";
import Nav from "./components/Nav";
import "./App.css";
import { Login } from "./components/Login/login";
import { Register } from "./components/Login/register";


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Air Ball</h2>
        </div>

        <div>
          <Nav />
          <Events />

        </div>

        <div className="Login">
          <div className="container">
            {isLogginActive && <Login containerRef={(ref) => this.current = ref} />} {!isLogginActive && <Register containerRef={(ref) => this.current = ref} />}
          </div>
          {/* <rightLogin current={current} containerRef={ref => this.rightLogin = ref} onCLick={this.changeState.bind(this)} /> */}
        </div>

      </div>
    );
  }
}

export default App;
