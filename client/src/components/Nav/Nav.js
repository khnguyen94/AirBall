import React, { Component } from "react";
import "./Nav.css";
import API from "../../utils/API";
import NavList from "./NavList";
var nbaTeams = require("../../data/nbaTeams.json");

class Nav extends Component {
  // Set initial states for: showAllTeams and showFavoriteTeams
  constructor(props) {
    super(props);
    this.state = {
      showAllTeams: false,
      showFavoriteTeams: false
    };
  }

  // Function for when the component mounts, load all the faveTeams to this.state.faveTeams
  // Then load all the the rest of the teams to this.state.allTeams
  componentDidMount() {
    this.loadFaveTeams();
    // this.loadAllTeams();
  }

  // Function to loadFavoriteTeams from DB
  loadFaveTeams = () => {
    API.getFavoriteTeam()
      .then(res => this.setState({ allTeam: res.data }))
      .catch(err => console.log(err));
  };

  // Function to loadAllTeams from DB
  // loadAllTeams = () => {
  //   API.getAllTeam()
  //     .then(res => this.setState({ faveTeams: res.data }))
  //     .catch(err => console.log(err));
  // };

  // Function to change state of showAllTeams property
  showAllTeams() {
    this.setState({
      showAllTeams: !this.state.showAllTeams
    });
  }

  // Function to change state of showFaveTeams property
  showFaveTeams() {
    this.setState({
      showFavoriteTeams: !this.state.showFavoriteTeams
    });
  }

  // Render function
  render() {
    // Define function that will render the list of NBA teams only if state.showAllTeams is true
    let displayAllTeamsList = this.state.showAllTeams ? (
      <NavList teams={nbaTeams} />
    ) : (
      ""
    );

    // Define function that will render the list of NBA teams only if state.showFaveTeams is true
    let displayFaveTeamsList = this.state.showFavoriteTeams ? (
      <NavList teams={nbaTeams} />
    ) : (
      ""
    );

    // Define function that will create html markups of each link
    let navLinksMarkup = this.props.links.map((link, index) => {
      let navLinkMarkupActive = link.hasList ? (
        <a className="navLink navLink-Active" href={link.link}>
          {link.label}
        </a>
      ) : (
        <a className="navLink" href={link.link}>
          {link.label}
        </a>
      );

      return (
        <li key={index} className="navListItem">
          {navLinkMarkupActive}
        </li>
      );
    });

    return (
      <nav className="nav">
        <h1
          style={{
            backgroundImage: "url(" + this.props.logo + ")"
          }}
          className="navLogo"
        >
          Air Ball
        </h1>

        <div className="navRight">
          <ul className="navList">{navLinksMarkup}</ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
