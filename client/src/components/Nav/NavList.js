import React, { Component } from "react";
import logo from "../../Logo/logo.png";
import "./NavList.css";
import SignInBTN from "../SignInBTN";
import RegisterBTN from "../RegisterBTN";
import "bootstrap/dist/css/bootstrap.min.css";
import Logout from "../Login/logout";

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
        <a className="navbar-brand" href="/">
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
            <RegisterBTN handleSubmitAccount={this.handleSubmitAccount} />
            <SignInBTN handleSignIn={this.handleSignIn} />
            <Logout handleSignOut={this.handleSignOut} />
          </ul>

          <div className="btn-container">
            
          </div>
        </div>
      </nav>
    );
  }
}

export default NavList;
