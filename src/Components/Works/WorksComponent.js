import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from "react-slick";

import imageOne from '../../images/carousel-1.png'
import imageTwo from '../../images/carousel-2.png'
import imageThree from '../../images/carousel-3.png'
import imageFour from '../../images/carousel-4.png'
import imageFive from '../../images/carousel-5.png'

const WorksComponent = () => {
  const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: false,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      
         
      
      
    };
    return (
        <Container>
            <div>
   
        <Slider {...settings}>
          <div style={{marginLeft: '30px', width: '30%'}}>
            <img src={imageOne} style={{ maxHeight: '400px', paddingRight: '30px'}} alt="imageOne"/>
          </div>
          <div style={{marginLeft: '30px'}}>
            <img src={imageTwo} style={{maxHeight: '400px'}} alt="image two"/>
          </div>
          <div>
            <img src={imageThree} style={{maxHeight: '400px'}} alt="image three"/>
          </div>
          
                    <div>
            <img src={imageFour} style={{maxHeight: '400px'}} alt="image four"/>
          </div>
          <div>
            <img src={imageFive} style={{maxHeight: '400px'}} alt="image five"/>
          </div>
          
          
        </Slider>
      </div>
         </Container>
    );
};

export default WorksComponent;