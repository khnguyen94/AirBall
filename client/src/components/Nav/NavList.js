import React, { Component } from "react";
import "./NavList.css";

class NavList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let navLinksMarkup = this.props.links.map((link, index) => {
      let navLinkMarkup = link.active ? (
        <a className="menu__link menu__link--active" href={link.link}>
          {link.label}
        </a>
      ) : (
        <a className="menu__link" href={link.link}>
          {link.label}
        </a>
      );

      return (
        <li key={index} className="menu__list-item">
          {navLinkMarkup}
        </li>
      );
    });

    return (
      <nav className="menu">
        <div 
          style={{
            backgroundImage: "url(" + this.props.logo + ")"
          }}
          className="menu__logo"
        ></div>

        <div>
          <h1>Air Ball</h1>
        </div>

        <div className="menu__right">
          <ul className="menu__list">{navLinksMarkup}</ul>
        </div>
      </nav>
    );
  }
}

export default NavList;
