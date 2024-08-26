import React, { Component, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { firstSliderLink } from "../../constants";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right:"5%",top:"60%", width:"30px",height:"30px", zIndex: 1, background: "transparent", scale:"1.8" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left:"5%", top:"60%", width:"30px",height:"30px", zIndex:1 , background: "transparent",scale:"1.8" }}
      onClick={onClick}
    />
  );
}

export const FirstSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider-container mb-14">
      <Slider {...settings}>
        {firstSliderLink.map((ele, index) => (
          <div key={index}>
            <img src={ele.src} alt="SliderImages" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
