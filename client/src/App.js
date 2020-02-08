import React, { Component } from "react";
import logo from "./Logo/Air_Ball_Logo.jpg";
import { Col, Row, Container } from "../src/components/Grid";
import "./App.css";
import Jumbotron from "./components/Jumbotron";

class App extends Component {
  render() {

    return (
      <Container fluid>
        <Row>
          <div className="App-header">
            <Col size="md-1 sm-3">
              <img src={logo} className="App-logo" alt="logo" />
            </Col>

            <Col size="md-4 sm-9">
              <h2 className="App-appname">Air Ball</h2>
            </Col>
          </div>
        </Row>

        <Row>
          <Col size="md-9 sm-12">
            <Jumbotron>
              <div className="summaryDiv">
                <p>
                  AirBall is the premiere sports notification system. Game
                  summaries can be delivered straight to your email at a
                  customized schedule. While the final score matters most, as
                  sports fans, we all know there is a library of supporting
                  numbers and statistics to understanding what goes on during
                  those 48 minutes.
                </p>

                <p>
                  We are pioneering sports analytics into being more more than a
                  game of numbers. Stay up to date with AirBall's visual game
                  summaries. Fans can see their favorite teams and players
                  performance in a simple, graphic presentation.
                </p>
              </div>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
