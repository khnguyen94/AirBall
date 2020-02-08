import React, { Component } from "react";

class NavSubList extends Component {
  render() {
    // Define a variable that will make html markups of each team in the appropriate list
    let subListMarkup = this.props.teams.map((team, index) => {
        <li className="nav__submenu-item ">
          <a>{team.name}</a>
        </li>
    });

    return (
      <ul className="navSubList">
        {subListMarkup}
      </ul>
    );
  }
}

export default NavSubList;
