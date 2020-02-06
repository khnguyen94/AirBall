import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
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
          <Col size="md-6">
            <Jumbotron>
              <h1>Air Ball - {name_of_webpage_here} </h1>
            </Jumbotron>

            <Jumbotron>
              <div>
                <SimpleImageSlider 
                width={896} 
                height={504} 
                images={images} />
              </div>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Events;
