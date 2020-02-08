import React, { Component } from "react";
import logo from "./Logo/Air_Ball_Logo.jpg";
import { Col, Row, Container } from "../src/components/Grid";
import "./App.css";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";


// Create an array to hold all slider Images
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

// Create an array of NavLinks
const navLinks = [
  {
    label: "Home",
    link: "#",
    hasList: false,
    active: true
  },
  {
    label: "All Teams",
    link: "#",
    hasList: true,
    teamList: [],
    active: false
  },
  {
    label: "Favorite Teams",
    link: "#",
    hasList: true,
    list: [],
    active: false
  },
  {
    label: "Calendar",
    link: "#",
    hasList: false,
    active: false
  }
];

// Create a settings object for the imageSlider
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

class App extends Component {
  render() {
    return (
      <Container fluid>
        <br />
        
        <Nav logo={logo} links={navLinks} />

        <br />

        <Row>
          <Col size="md-4 sm-12">
            <Jumbotron>FILLER</Jumbotron>
          </Col>

          <Col size="md-8 sm-12">
            <Jumbotron
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)"
              }}
            >
              <Slider {...settings}>
                {sliderImages.map(image => {
                  return (
                    <div>
                      <img className="sliderImage" src={image.url} />
                    </div>
                  );
                })}
              </Slider>

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
}

export default App;
