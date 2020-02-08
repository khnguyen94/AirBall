import React, { Component } from "react";
import logo from "./Logo/Air_Ball_Logo.jpg";
import { Col, Row, Container } from "../src/components/Grid";
import "./App.css";
import Nav from "./components/Nav";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Create an array of NavLinks
const navLinks = [
  {
    label: "Home",
    link: "#",
    hasList: false,
    active: true
  },
  {
    label: "All Teams",
    link: "#",
    hasList: true,
    teamList: [],
    active: false
  },
  {
    label: "Favorite Teams",
    link: "favorites",
    hasList: true,
    list: [],
    active: false
  },
  {
    label: "Calendar",
    link: "#",
    hasList: false,
    active: false
  }
];


function App() {
    return (
      <Router>
        <Container fluid>
          <br />
          
          <Nav logo={logo} links={navLinks} />

          <br />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/favorites" component={Favorites} />
          </Switch>
        </Container>
      </Router>
    );
}

export default App;
