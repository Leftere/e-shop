import React from "react";
import Slider from "react-slick";
import Slide from "./Slide/Slide";
import Categories from "../Categories/Categories";
// top slider desktop Photos
import images from './images';

import "./Slider.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1
};

const bottomSliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1
}
class SimpleSlider extends React.Component {
    constructor(props) {
      super(props);
      let viewport = window.innerWidth > 600 ? "desktop" : "mobile";
      this.state = {
        viewport
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

  createSlider(images, config) { 
    return (
      
      <Slider {...config}>
      {images.map((slide, i) => {
        const slideImg = 
        this.state.viewport === "desktop" ? slide.url : slide.mobileUrl;
        return(
          <div key={i}>
          <Slide slide={slideImg} />
          </div>
        );
      })}
      </Slider>
    )
  }
  render() {
    let topSlider = this.createSlider(images[0], settings);
    let bottomSlider = this.createSlider(images[1], bottomSliderSettings);
    return (
      <div>
        {topSlider}
      <Categories />  
      {bottomSlider}
      </div>
    );
  }
}


export default SimpleSlider;