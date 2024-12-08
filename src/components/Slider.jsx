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
import { Typewriter } from "react-simple-typewriter";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        // background: "red",
        position: "absolute",
        right: "5%",
        scale: "2",
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
        position: "absolute",
        left: "5%",
        zIndex: "10",
        fontSize: "38",
        scale: "2",
      }}
      onClick={onClick}
    />
  );
}

const SliderImg = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    fade: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="slider-container pr-2 pl-2 pb-2 mb-10">
      <Slider {...settings}>
        <div className="rounded-xl relative">
          <img className="w-full h-[600px] rounded-xl " src={passport} alt="" />
          <h3 className="absolute oswald text-6xl font-bold text-gray-800 top-24  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {/* Immigration Visa Consulting */}
            <Typewriter
              words={["Immigration Visa Consulting"]}
              loop={true} // Loops the animation
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h3>
        </div>
        <div className="relative">
          <img className="w-full h-[600px] rounded-xl" src={china} alt="" />
          <h3 className="absolute oswald text-6xl font-bold top-24 text-white mx-auto  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {/* Tourist Visa Application */}
            <Typewriter
              words={["Tourist Visa Application"]}
              loop={true} // Loops the animation
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h3>
        </div>
        <div className="relative">
          <img className="w-full h-[600px] rounded-xl" src={dark} alt="" />
          <h3 className="absolute oswald text-6xl font-bold top-24 text-white mx-auto  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {/* Student Visa Advising */}
            <Typewriter
              words={["Student Visa Advising"]}
              loop={true} // Loops the animation
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
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
