import React, { Component } from "react";
import { Col, Row } from "../components/Grid";
import Landing from "../components/Landing/Landing";
import Jumbotron from "../components/Jumbotron";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Create an array to hold all slider Images
const carouselImages = [
  {
    name: "Image 1",
    url: "https://images.fineartamerica.com/images/artworkimages/medium/3/kobe-bryant-nathaniel-s-butler.jpg"
  },
  {
    name: "Image 2",
    url:
      "https://images.fineartamerica.com/images/artworkimages/medium/3/jaylen-brown-and-jayson-tatum-nathaniel-s-butler.jpg"
  },
  {
    name: "Image 3",
    url: "https://images.fineartamerica.com/images/artworkimages/medium/3/22-giannis-antetokounmpo-nathaniel-s-butler.jpg"
  },
  {
    name: "Image 4",
    url: "https://images.fineartamerica.com/images/artworkimages/medium/3/14-dwyane-wade-jesse-d-garrabrant.jpg"
  },
  {
    name: "Image 5",
    url: "https://images.fineartamerica.com/images/artworkimages/medium/3/9-ben-simmons-nathaniel-s-butler.jpg"
  } ,
  {
    name: "Image 6",
    url: "https://images.fineartamerica.com/images/artworkimages/medium/3/1-damian-lillard-and-cj-mccollum-sam-forencich.jpg"
  } ,
  {
    name: "Image 7",
    url: "https://images.fineartamerica.com/images/artworkimages/medium/3/1-james-harden-jesse-d-garrabrant.jpg"
  } ,
  {
    name: "Image 8",
    url: "https://images.fineartamerica.com/images/artworkimages/medium/3/1-kemba-walker-garrett-ellwood.jpg"
  } ,
  {
    name: "Image 9",
    url: "https://images.fineartamerica.com/images/artworkimages/medium/2/dallas-mavericks-v-new-york-knicks-jesse-d-garrabrant.jpg"
  },
  {
    name: "Image 10",
    url: "https://images.fineartamerica.com/images/artworkimages/medium/3/22-stephen-curry-nathaniel-s-butler.jpg"
  }
];

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  state = {
  }

  render() {
      return (
          <Landing images={carouselImages} registerBtn={this.props.RegisterBTN}/>
      )
  }
}

export default LandingPage;
