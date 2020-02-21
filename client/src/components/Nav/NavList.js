import React, { Component } from "react";
import logo from "../../Logo/logo.png";
import "./NavList.css";

class NavList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let renderLinkMarkup = this.props.links.map((link, index) => {
      return (
        <li className="nav-item">
          <a className="nav-link" href={link.link}>
            {link.label}
          </a>
        </li>
      );
    });

    return (
      <nav className="navbar navbar-expand-md bg-dark fixed-top">
        <a className="navbar-brand" href="#">
          <img src={logo} />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            {renderLinkMarkup}
            </ul>

          <div className="">
            <button className="btn btn-outline-light" type="button">Register</button>
            <button className="btn btn-outline-light" type="button">Login</button>
          </div>

        </div>
      </nav>
    );
  }
}

export default NavList;
