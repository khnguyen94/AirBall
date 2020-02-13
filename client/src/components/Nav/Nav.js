import React, { Component } from "react";
import "./Nav.css";
import API from "../../utils/API";
import NavList from "./NavList";
var nbaTeams = require("../../data/nbaTeams.json");

class Nav extends Component {
  // Render function
  render() {

    return (
      <nav className="nav">
        <h1
          style={{
            backgroundImage: "url(" + this.props.logo + ")"
          }}
          className="navLogo"
        >
        </h1>

        <h3> Air Ball</h3>

        <div className="navUserDisp">

        </div>
      </nav>
    );
  }
}

export default Nav;
