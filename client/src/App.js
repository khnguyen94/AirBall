import React, { Component } from "react";
import logo from "./Logo/Air_Ball_Logo.jpg";
import { Col, Row, Container } from "../src/components/Grid";
import "./App.css";
import Jumbotron from "./components/Jumbotron";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderImages = [
  {
    name: "Image 1",
    url:
      "https://images.unsplash.com/photo-1532040683343-edbde6dd500d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"
  },
  {
    name: "Image 2",
    url:
      "https://images.unsplash.com/photo-1574290139543-b3adb08494c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Image 3",
    url:
      "https://www.si.com/.image/t_share/MTY4MTY3NzE0Njc2ODExMDI1/kobe-lebron-scoringjpg.jpg"
  },
  {
    name: "Image 4",
    url:
      "https://img.bleacherreport.net/img/images/photos/002/485/178/97032933_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top"
  },
  {
    name: "Image 5",
    url:
      "https://usatftw.files.wordpress.com/2018/05/ap_aptopix_heat_bucks_basketball.jpg?w=1000&h=600&crop=1"
  }
];

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

            <Col size="md-4 sm-9">
              <h2 className="App-appname">Air Ball</h2>
            </Col>
          </div>
        </Row>

        <Row>
          <Col size="md-9 sm-12">
            <Jumbotron>
              <div className="Slider-div">
                <Slider {...settings}>
                  {sliderImages.map(image => {
                    return (
                      <div>
                        <img className="Slider-image" src={image.url} alt="image"/>
                      </div>
                    );
                  })}
                </Slider>
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
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
