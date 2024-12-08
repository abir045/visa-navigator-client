import React from "react";
import beijing from "../assets/beijing.jpg";
import america from "../assets/america.jpg";
import berlin from "../assets/Berlin.jpg";
import spain from "../assets/spain.jpg";
import india from "../assets/india.jpg";
import uk from "../assets/uk.jpg";
import aus from "../assets/australia.jpg";
import thai from "../assets/thailand.jpg";
import { Fade } from "react-awesome-reveal";

const Coutries = () => {
  return (
    <div className="flex flex-col items-center mt-20">
      <Fade>
        <h3 className="text-2xl font-semibold mt-5">Countries We offer</h3>
      </Fade>

      <Fade>
        <h1 className="text-4xl mt-5 font-bold oswald">
          Best Countries to Travel
        </h1>
      </Fade>

      <div className="flex items-center gap-5 mt-5 text-xl font-semibold mb-10">
        <h4>Education</h4>
        <h4>Immigration</h4>
        <h4>Business</h4>
      </div>
      <Fade duration={2000}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={beijing} className="h-[600px]" alt="" />
            <p className="text-center font-semibold text-3xl">China</p>
          </div>

          <div>
            <img src={america} className="h-[600px]" alt="" />
            <p className="text-center font-semibold text-3xl">USA</p>
          </div>

          <div>
            <img src={berlin} className="h-[600px]" alt="" />
            <p className="text-center font-semibold text-3xl">Germany</p>
          </div>

          <div>
            <img src={spain} className="h-[600px]" alt="" />
            <p className="text-center font-semibold text-3xl">Spain</p>
          </div>

          <div>
            <img src={india} className="h-[600px]" alt="" />
            <p className="text-center font-semibold text-3xl">India</p>
          </div>
          <div>
            <img src={uk} className="h-[600px]" alt="" />
            <p className="text-center font-semibold text-3xl">United Kingdom</p>
          </div>
          <div>
            <img src={aus} className="h-[600px]" alt="" />
            <p className="text-center font-semibold text-3xl">Australia</p>
          </div>
          <div>
            <img src={thai} className="h-[600px]" alt="" />
            <p className="text-center font-semibold text-3xl">Thailand</p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Coutries;
