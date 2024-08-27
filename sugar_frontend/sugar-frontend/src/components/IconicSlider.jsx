import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import App.css

import { sugarIconicLink } from "../constants";

const IconicSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: false,
          infinite: true,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
          infinite: true,
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
        }
      },
    ],
  };

  return (
    <div className="slider-container px-8 pt-6">
      <Slider {...settings}>
        {sugarIconicLink.map((ele, index) => (
          <div
            key={index}
            className="slide-item rounded-2xl overflow-hidden border-2 border-black flex"
          >
            <img src={ele.src} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default IconicSlider;
