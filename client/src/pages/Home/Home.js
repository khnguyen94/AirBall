import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import Nav from "../../components/Nav/Nav";
import SimpleImageSlider from "react-simple-image-slider";

class Home extends Component {
  render() {
    const images = [
      { url: "images/1.jpg" },
      { url: "#" },
      { url: "#" },
      { url: "#" },
      { url: "#" },
      { url: "#" },
      { url: "#" }
    ];

    return (
      <Container fluid>
        <Row>
          <Col size="md-9 sm-12">
            <Jumbotron>
<<<<<<< HEAD
              <div className="sliderDiv">
                <SimpleImageSlider width={896} height={504} images={images} />
=======
              <h1>Air Ball - {name_of_webpage_here} </h1>
            </Jumbotron>

            <Jumbotron>
              <div className="sliderDiv">
              <div>
                <SimpleImageSlider 
                width={896} 
                height={504} 
                images={images} />
>>>>>>> 011b6cec09274b7b1fb0465843c59af0f2f92d84
              </div>

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
<<<<<<< HEAD
=======
              </div>
>>>>>>> 011b6cec09274b7b1fb0465843c59af0f2f92d84
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
