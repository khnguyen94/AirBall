import React, { Component } from "react";
import NavList from "./NavList";
import "./Nav.css";

class Nav extends Component {
  // Render function
  render() {
    let links = [
      { label: 'Home', link: '/home'},
      { label: 'Favorites', link: 'favorites' }
    ];

    return (
      <div>
        <NavList links={links}/>
      </div>
    );
  }
}

export default Nav;
