import React from "react";
import "../SideBar/SideBar.css";
import { Row } from "../Grid";
import FavoriteTeamBtn from "../FavoriteTeamBtn";

function SideBar(props) {
  // Function to render all of the teams from allTeamsFiltered
  let renderAllTeams = props.teams
    .map((team, index) => {
      return (
        <li className="listItem">
          <a className="listItemText" eventKey={index} href="#" data-teamId={team.teamId} onClick={props.clickFunc}>
            {team.fullName}
            <FavoriteTeamBtn />
          </a>
          <div className="faveBtnContainer" >
            <input className="star" type="checkbox" id={index} onChange={props.changeFavTeam} checked={team.favorite}/>
          </div>
        </li>
      );
    });

  // Function to render all the favorite teams from faveTeamsFiltered
  let renderFaveTeams = props.favteams
    .map((team, index) => {
      return (
        <li className="listItem">
          <a className="listItemText" eventKey={index} href="#">
            {team.fullName}
          </a>
          <div className="faveBtnContainer">
          </div>
        </li>
      );
    });

  return (
    <div className="wrapper">
      <nav id="sidebar">
        <ul className="list-unstyled components">
          <li className="sideBarMainItem">
            <a href="#">
              <span className="sideBarMainItemText">Home</span>
            </a>
          </li>
          <li className="sideBarMainItem">
            <a
              href="#faveTeamsList"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <span className="sideBarMainItemText">Favorite Teams</span>
            </a>
            <ul className="collapse list-unstyled" id="faveTeamsList">
              {renderFaveTeams}
            </ul>
          </li>

          <li className="sideBarMainItem">
            <a
              href="#homeSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <span className="sideBarMainItemText">All Teams</span>
            </a>
            <ul className="collapse list-unstyled" id="homeSubmenu">
              {renderAllTeams}
            </ul>
          </li>

          <li className="sideBarMainItem">
            <a href="#">
              <span className="sideBarMainItemText">Calendar</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
