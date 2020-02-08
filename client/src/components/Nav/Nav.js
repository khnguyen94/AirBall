import React from "react";
import NavItem from "../Nav/NavItem";

class Nav extends React.Component {
  state = {
    teams: []
  };

  render() {
    return (
      <div className="nav">
        {this.state.teams.map(team => {
          return (
            <NavItem key={team._id}>
              <a href={"/teams/" + team._id}>{team.name}</a>
            </NavItem>
          );
        })}

        {/* <ul>
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
        </ul> */}
      </div>
    );
  }
}

export default Nav;
