import React from 'react'
import Slider from 'react-slick';
import Slide from './Slide/Slide';
import slide1Desktop from '../../assets/slider-imgs/desktop/spring-collection-2019-desktop.jpg'
import slide2Desktop from '../../assets/slider-imgs/desktop/short-sleeves-2019-desktop.jpg'
import './Slider.css';

export default class SimpleSlider extends React.Component {
  state = {
    slides: [
      {slide: slide1Desktop},
      {slide: slide2Desktop},
    ]
  }
    
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      
      return (
        <Slider {...settings}>
          <div>
          <Slide slide={this.state.slides[0]}/>
          </div>
          <div>
          <Slide slide={this.state.slides[1]}/>
          </div>
        </Slider>
      );
    }
  }

  