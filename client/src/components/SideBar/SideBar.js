import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import NavDropDown from "react-bootstrap/NavDropdown";
import API from "../../utils/API";
var nbaTeams = require("../../data/nbaTeams.json");

function Sidebar() {
  // Function to filter res.data and renderFaveTeams

  // Function to filter res.data and renderAllTeams (what teams are leftover)

  return (
    <Container>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Home</Nav.Link>

        <NavDropdown title="All Teams" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1">Team 1</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Team 2</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">Team 3</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.4">Team 4</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="All Teams" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1">Team 1</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Team 2</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">Team 3</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.4">Team 4</NavDropdown.Item>
        </NavDropdown>

        <Nav.Link eventKey="link-3">Calendar</Nav.Link>
      </Nav>
    </Container>
  );
}

export default SideBar;
