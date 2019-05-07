import React from "react";
import Slider from "react-slick";
import Slide from "./Slide/Slide";

import slide1Desktop from "../../assets/slider-imgs/desktop/spring-collection-2019-desktop.jpg";
import slide2Desktop from "../../assets/slider-imgs/desktop/short-sleeves-2019-desktop.jpg";

import slide1DesktopMob from "../../assets/slider-imgs/desktop/spring-collection-2019-desktop.jpg";
import slide2DesktopMob from "../../assets/slider-imgs/desktop/short-sleeves-2019-desktop.jpg";

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
        mobileUrl: slide1DesktopMob
      },
      {
        url: slide2Desktop,
        mobileUrl: slide2DesktopMob
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
            <div>
              <Slide key={i} slide={slideImg} />
            </div>
          );
        })}
      </Slider>
    );
  }
}
