import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

class ImageSlider extends Component {
  render() {
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

    return (
      <div>
        <Slider {...settings}>
          {sliderImages.map(image => {
            return (
              <div>
                <img className="sliderImage" src={image.url} />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default ImageSlider;
