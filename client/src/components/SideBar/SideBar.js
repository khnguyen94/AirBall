import React from "react";
import { Container } from "../Grid";
import "../SideBar/SideBar.css";

function SideBar(props) {
  // Function to render all of the teams from allTeamsFiltered
  let renderAllTeams = props.teams
    .filter(team => {
      return team.favorite === false;
    })
    .map((team, index) => {
      return (
        <li>
          <a eventKey={index} href="#">
            {team.fullName}
          </a>
        </li>
      );
    });

  // Function to render all the favorite teams from faveTeamsFiltered
  let renderFaveTeams = props.teams
    .filter(team => {
      return team.favorite === true;
    })
    .map((team, index) => {
      return (
        <li>
          <a eventKey={index} href="#">
            {team.fullName}
          </a>
        </li>
      );
    });

  return (
    <Container>
      <div className="wrapper">
        <nav id="sidebar">
          <ul class="list-unstyled components">
            <li class="active">
              <li>
                <a href="#">Home</a>
              </li>

              <a
                href="#homeSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                All Teams
              </a>
              <ul class="collapse list-unstyled" id="homeSubmenu">
                {renderAllTeams}
              </ul>
            </li>

            <li>
              <a
                href="#pageSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                Favorite Teams
              </a>
              <ul class="collapse list-unstyled" id="pageSubmenu">
                {renderFaveTeams}
              </ul>
            </li>

            <li>
              <a href="#">Calendar</a>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
}

export default SideBar;
