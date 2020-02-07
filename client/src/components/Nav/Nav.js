import React from "react";

class Nav extends React.Component {
  constructor(props) {}

  render() {
    return (
      <div class="nav">
        <ul>
          <li className="nav-link">
            <a href="#">Home</a>
          </li>

          <li className="nav-link dropdown-toggle">
            <a href="#">Favorites</a>

            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>

          <li className="nav-link dropdown-toggle">
            <a href="#">All Teams</a>
          </li>

          <li className="nav-link">
            <a href="#">Calendars</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
