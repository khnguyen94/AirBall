import React, { Component } from "react";
import logo from "../../Logo/logo.jpg";
import NavList from "./NavList";
import "./Nav.css";

class Nav extends Component {
  // Render function
  render() {
    let links = [
      { label: 'Home', link: '#home', active: true },
      { label: 'Favorites', link: '#favorites' },
      { label: 'Link 3', link: '#link3' },
      { label: 'Link 4', link: '#link4' },
    ];

    return (
      <div>
        <NavList links={links} logo={logo}/>
      </div>
    );
  }
}

export default Nav;
