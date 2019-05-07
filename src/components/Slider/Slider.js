import React from 'react'
import Slider from 'react-slick';
import slider1Desktop from '../../assets/slider-imgs/desktop/spring-collection-2019-desktop.jpg'
import slider2 from '../../assets/slider-imgs/desktop/short-sleeves-2019-desktop.jpg'

import './Slider.css';


export default class SimpleSlider extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            src: slider1Desktop
        }
    };




    
    render() {
      var settings = {
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
              <img src={this.state.src}/>
          </div>
          <div>
          <img src={slider2}/>
          </div>
          
        
        
        
        </Slider>
      );
    }
  }

  