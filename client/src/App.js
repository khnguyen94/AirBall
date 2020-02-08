import React, { Component } from "react";
import logo from "./Logo/Air_Ball_Logo.jpg";
<<<<<<< HEAD
import { Col, Row, Container } from "../src/components/Grid";
=======
import Events from "./pages/Events/Events";
import Nav from "./components/Nav";
>>>>>>> 011b6cec09274b7b1fb0465843c59af0f2f92d84
import "./App.css";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const sliderImages = [
  {
    name: "Image 1",
    url: "https://wallpaperfm.com/img/original/3/6/a/49159.jpg"
  },
  {
    name: "Image 2",
    url:
      "https://images.wallpaperscraft.com/image/paul_pierce_washington_wizards_basketball_nba_103099_1280x720.jpg"
  }
];

<<<<<<< HEAD
class App extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: 1,
      className: "slides"
    };

    return (
      <Container fluid>
        <Row>
          <div className="App-header">
            <Col size="md-1 sm-3">
              <img src={logo} className="App-logo" alt="logo" />
            </Col>

            <Col size="md-2 sm-3">
              <h2 className="App-appname">Air Ball</h2>
            </Col>

            <Col size="md-9 sm-12">
              <ul className="navBarList">
                <li className="navBarItem">
                  <a className="navBarItemLink" href="#">Home</a>
                </li>
              </ul>
            </Col>
          </div>
        </Row>

        <br />
        <br />
        <br />
        <br />
        <br />

        <Row>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <div className="Slider-div">
                <Slider {...settings}>
                  {sliderImages.map(image => {
                    return (
                      <div>
                        <img
                          className="Slider-image"
                          src={image.url}
                          alt="image"
                        />
                      </div>
                    );
                  })}
                </Slider>
              </div>

              <div className="Summary-div">
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
=======
function App() {
  return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Air Ball</h2>
        </div>
        <div>
          <Nav />
          <Events />
        </div>
      </div>
  );
>>>>>>> 011b6cec09274b7b1fb0465843c59af0f2f92d84
}

export default App;
