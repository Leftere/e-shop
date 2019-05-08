import React from "react";
import Slider from "react-slick";
import Slide from "./Slide/Slide";

import slide1Desktop from "../../assets/slider-imgs/desktop/spring-collection-2019-desktop.jpg";
import slide2Desktop from "../../assets/slider-imgs/desktop/short-sleeves-2019-desktop.jpg";

import slide1Mob from "../../assets/slider-imgs/mobile/spring-collection-2019-mobile.jpg";
import slide2Mob from "../../assets/slider-imgs/mobile/short-sleeves-2019-mobile.jpg";

import "./Slider.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1
};

export default class SimpleSlider extends React.Component {
  state = {
    slides: [
      {
        url: slide1Desktop,
        mobileUrl: slide1Mob
      },
      {
        url: slide2Desktop,
        mobileUrl: slide2Mob
      }
    ]
  };

  render() {
    return (
      <Slider {...settings}>
        {this.state.slides.map((slide, i) => {
          const slideImg =
            window.innerWidth > 767 ? slide.url : slide.mobileUrl;
          return (
            <div key={i} >
              <Slide slide={slideImg} />
            </div>
          );
        })}
      </Slider>
    );
  }
}
