import React, { Component } from "react";
import "./Landing.css";
import Carousel from "react-bootstrap/Carousel";

class Landing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let renderCarouselMarkup = this.props.images.map((image, index) => {
      return (
        <Carousel.Item>
          <img
            className="carouselImg"
            src={image.url}
            alt={image.name}
          />
        </Carousel.Item>
      );
    });

    return (
      <div>
        <div className="landing">
          <div className="home-wrap">
            <div className="home-inner"></div>
          </div>
        </div>

        <div className="caption text-center">
          <h1>WELCOME TO AIRBALL</h1>

          <Carousel>
            {renderCarouselMarkup}
          </Carousel>

          <h3>GAME NOTIFICATIONS FOR TRUE NBA FANS</h3>
          <a className="btn btn-outline-light btn-lg">GET STARTED</a>
        </div>
      </div>
    );
  }
}

export default Landing;
