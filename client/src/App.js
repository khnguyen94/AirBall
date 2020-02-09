import React, { Component } from "react";
import logo from "./Logo/Air_Ball_Logo.jpg";
import Events from "./pages/Events/Events";
import Nav from "./components/Nav";
import "./App.css";
// import { Login } from "./components/Login/login";
// import { Register } from "./components/Login/register";
import SignInBTN from "./components/SignInBTN";
import RegisterBTN from "./components/RegisterBTN";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
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
          <SignInBTN />
          <RegisterBTN />

        </div>

      </div>
    </div>
  );
}

export default App;


