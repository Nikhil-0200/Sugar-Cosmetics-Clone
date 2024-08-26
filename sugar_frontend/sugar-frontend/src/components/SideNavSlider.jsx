import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sideNavLink } from "../constants";

function SwipeToSlide() {
  const settings = {
    className: "center",
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
  };
  return (
    <div className="slider-container pt-4">
      <Slider {...settings}>
            {sideNavLink.map((ele, index)=>(
                <div key={index} className="rounded-xl overflow-hidden" >
                    <p className="z-10 absolute translate-x-[50%] translate-y-[50%] text-white font-semibold text-[13px]">{ele.label} <span></span></p>
                    <img className="w-full h-[110px] scale-100 px-[5px] " src={ele.src} alt={ele.label} />
                </div>
            ))}
      </Slider>
    </div>
  );
}

export default SwipeToSlide;
