import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import NavItem from "../Nav/NavItem";

class NavItem extends Component {
  render() {
    return (
      <div>
        <li className="navItem">{this.props.teamName}</li>
      </div>
    );
  }
}

class Nav extends Component {
  // Set initial state of our Navigation component
  state = {
    allTeamsList: [],
    allTeamName: "",
    faveTeamsList: [],
    faveTeamName: ""
  };

  // Function for when the component mounts, load all the faveTeams to this.state.faveTeams
  // Then load all the the rest of the teams to this.state.allTeams
  componentDidMount() {
    this.loadFaveTeams();
    this.loadAllTeams();
  }

  // Function to load all Favorite Teams and set them to this.state.faveTeams
  loadFaveTeams = () => {
    API.getFaveTeams()
      .then(res => this.setState({ faveTeamsList: res.data, faveTeamName: "" }))
      .catch(err => console.log(err));
  };

  // Function to load all Remaining Teams and set them to this.state.allTeams
  loadAllTeams = () => {
    API.getAllTeams()
      .then(res => this.setState({ allTeamsList: res.data, allTeamName: "" }))
      .catch(err => console.log(err));
  };

  // Function to delete a faveTeam from faveTeamsLists
  deleteFaveTeam = id => {
    API.deleteFaveTeam(id).then(res => this.loadFaveTeams())
    .catch(err => console.log(err));
  };

  // Function to handle saveFaveTeam, save the faveTeam 
  // Then reload the faveTeams from the database
  handleSaveFaveTeam = event => {
    event.preventDefault();
    API.saveFaveTeam({
      teamName: this.state.faveTeamName
    })
    .then(res => this.loadFaveTeams())
    .catch(err => console.log(err));

  }

  render(props) {
    const navLinks = [
      { label: "Home", link: "#home", active: true },
      { label: "Favorite Teams", link: "#" },
      { label: "All Teams", link: "#" },
      { label: "Calendar", link: "#" }
    ];

    const allTeams = {
      lakers: {
        location: "Los Angeles",
        teamName: "Lakers"
      },
      timberwolves: {
        location: "Minnesota",
        teamName: "Timberwolves"
      }
    };

    return (
      <Container fluid>
        <Row>
          <Col size="md-4 sm-12">
            <NavItem teamName={} />
          </Col>
        </Row>

        {this.state.teams.map(team => {
          return (
            <NavItem key={team._id}>
              <a href={"/teams/" + team._id}>{team.name}</a>
            </NavItem>
          );
        })}
      </Container>
    );
  }
}

export default Nav;
