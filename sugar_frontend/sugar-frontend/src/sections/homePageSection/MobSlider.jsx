import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {mobGift_icon,
    mobTrend_icon,
    mobLips_icon,
    mobFace_icon,
    mobEyes_icon,
    mobSkin_icon,
    mobSugar_icon} from "../../assets/images/firstSlider_images/index"

function MobSlider() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  return (
    <div className="slider-container pt-3 px-2 tablet:hidden">
      <Slider {...settings}>
        <div className="p-2">
          <img width={60} height={60} src={mobGift_icon} alt="mobGift_icon" />
        </div>
        <div className="p-2" >
        <img width={60} height={60} src={mobTrend_icon} alt="mobTrend_icon" />
        </div>
        <div className="p-2" >
        <img width={60} height={60} src={mobLips_icon} alt="mobLips_icon" />
        </div>
        <div className="p-2" >
        <img width={60} height={60} src={mobFace_icon} alt="mobFace_icon" />
        </div>
        <div className="p-2" >
        <img width={60} height={60} src={mobEyes_icon} alt="mobEyes_icon" />
        </div>
        <div className="p-2" >
        <img width={60} height={60} src={mobSkin_icon} alt="mobSkin_icon" />
        </div>
        <div className="p-2" >
        <img width={60} height={60} src={mobSugar_icon} alt="mobSugar_icon" />
        </div>
      </Slider>
    </div>
  );
}

export default MobSlider;
