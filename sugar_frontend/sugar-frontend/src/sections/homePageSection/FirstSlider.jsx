import React, { Component, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MobSlider from "./MobSlider";

import { firstSliderLink } from "../../constants";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        right: "5%",
        top: "60%",
        width: "30px",
        height: "30px",
        zIndex: 1,
        background: "transparent",
        scale: "1.8",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        left: "5%",
        top: "60%",
        width: "30px",
        height: "30px",
        zIndex: 1,
        background: "transparent",
        scale: "1.8",
      }}
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
    <section>
      <div>
        <MobSlider />
      </div>
      <div className="slider-container mobile:mb-8 tablet:mb-14">
        <Slider {...settings}>
          {firstSliderLink.map((ele, index) => (
            <div key={index}>
              <div key={index} className="mobile:hidden tablet:block laptop:block" >
                <img
                  src={ele.src}
                  alt="SliderImages"
                />
              </div>
              <div className="tablet:hidden mobile: block" key={index}>
                <img
                  
                  src={ele.srcMb}
                  alt="SliderImages"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
