import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import SimpleImageSlider from "react-simple-image-slider";

class Home extends Component {
  render() {
    const images = [
      { url: "images/1.jpg" },
      { url: "images/2.jpg" },
      { url: "images/3.jpg" },
      { url: "images/4.jpg" },
      { url: "images/5.jpg" },
      { url: "images/6.jpg" },
      { url: "images/7.jpg" }
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
                <SimpleImageSlider width={896} height={504} images={images} />
              </div>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Events;
