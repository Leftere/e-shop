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

class SimpleSlider extends React.Component {
    constructor(props) {
      super(props);
      let viewport = window.innerWidth > 600 ? "desktop" : "mobile";
      this.state = {
        viewport,
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
    }


  componentDidMount() {
    window.addEventListener('resize', this.isMobile)
  }
  componentWillMount() {
    window.removeEventListener('resize', this.isMobile)
  }

  isMobile = () => {
    if(window.innerWidth < 600 && this.state.viewport === "desktop") {
      this.setState({viewport: "mobile"});
    } else if (window.innerWidth > 600 && this.state.viewport === "mobile") {
      this.setState({viewport: "desktop"})
    }
  }

  render() {
    return (
      <Slider {...settings}>
        {this.state.slides.map((slide, i) => {
          const slideImg =
          this.state.viewport === "desktop" ? slide.url : slide.mobileUrl;
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


export default SimpleSlider;