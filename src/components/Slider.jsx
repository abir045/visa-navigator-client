import React from "react";
import Slider from "react-slick";
import v1 from "../assets/visa1.jpg";
import v2 from "../assets/visa2.jpg";
import v3 from "../assets/visa3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import student from "../assets/student.jpg";
import passport from "../assets/portugal.jpg";
import airport from "../assets/airport.jpg";
import usa from "../assets/usa.jpg";
import study from "../assets/study.jpg";
import hall from "../assets/hall.jpg";
import china from "../assets/china.jpg";
import dark from "../assets/dark.jpg";

const SliderImg = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    fade: true,
  };

  return (
    <div className="slider-container p-3 mb-10">
      <Slider {...settings}>
        <div className="rounded-xl relative">
          <img className="w-full h-[600px] rounded-xl" src={passport} alt="" />
          <h3 className="absolute oswald text-6xl font-bold text-gray-800 top-24  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Immigration Visa Consulting
          </h3>
        </div>
        <div className="relative">
          <img className="w-full h-[600px] rounded-xl" src={china} alt="" />
          <h3 className="absolute oswald text-6xl font-bold top-24 text-white mx-auto  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Tourist Visa Application
          </h3>
        </div>
        <div className="relative">
          <img className="w-full h-[600px] rounded-xl" src={dark} alt="" />
          <h3 className="absolute oswald text-6xl font-bold top-24 text-white mx-auto  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Student Visa Advising
          </h3>
        </div>
        {/* <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div> */}
      </Slider>
    </div>
  );
};

export default SliderImg;
