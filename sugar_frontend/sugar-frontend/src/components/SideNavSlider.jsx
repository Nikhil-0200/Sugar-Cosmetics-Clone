import React, { Component, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sideNavLink, sideNavLink1 } from "../constants";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IconContext } from "react-icons";

function SwipeToSlide() {
  let [isOpen, setIsOpen] = useState(null);

  function handleToggle(index) {
    setIsOpen((prevState) => (prevState === index ? null : index));
  }

  const settings = {
    className: "center",
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
  };
  return (
    <section>
      <div className="slider-container pt-4">
        <Slider {...settings}>
          {sideNavLink.map((ele, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden relative transition duration-300 ease-in-out ${
                isOpen !== null && isOpen !== index
                  ? "filter grayscale opacity-50"
                  : ""
              }`}
              onClick={() => handleToggle(index)}
            >
              <p className="z-10 absolute left-[10%] top-[10%] text-white font-semibold text-[13px] flex align-middle items-center gap-1">
                {ele.label}{" "}
                <IconContext.Provider
                  value={{ size: 18, className: "global-class-name" }}
                >
                  <span>
                    {isOpen === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </span>
                </IconContext.Provider>
              </p>
              <img
                className="w-full h-[110px] scale-100 px-[5px]"
                src={ele.src}
                alt={ele.label}
              />
            </div>
          ))}
        </Slider>

        {isOpen !== null && (
          <div className="details-container mt-4 p-4  rounded-lg px-8">
            {sideNavLink[isOpen].details.map((detail, detailIndex) => (
              <div key={detailIndex} className="text-lg uppercase font-bold text-gray-800 border-b-[0.5px] border-gray-400 py-5">
                {detail}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="py-4">
        {sideNavLink1.map((ele, index)=>(
          <div key={index} className="uppercase border-b-[0.5px] border-gray-400 py-5 px-4">
            {ele.label}
          </div>
        ))}
      </div>

    </section>
  );
}

export default SwipeToSlide;
