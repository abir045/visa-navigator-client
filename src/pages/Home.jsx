import React, { useState } from "react";
import Slider from "../components/Slider";
import SliderImg from "../components/Slider";
import { NavLink, useLoaderData } from "react-router-dom";
import VisaCard from "../components/VisaCard";
import Countries from "../components/Countries";
import Faq from "../components/Faq";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const Home = () => {
  const loadedVisas = useLoaderData();
  const showedVisas = loadedVisas.slice(0, 6);

  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <SliderImg />

      <div>
        <h3 className="text-center text-4xl font-bold mb-5">Visa Categories</h3>
        <h4 className="text-center text-3xl mb-10">
          Assisting you in fulfilling your eligibility for immigrant
          registration.
        </h4>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 max-w-7xl mx-auto">
        {showedVisas.map((visa) => (
          <VisaCard key={visa._id} visa={visa} />
        ))}
      </div>
      <NavLink
        className="btn btn-wide btn-neutral my-10 flex  mx-auto"
        to="/allvisas"
      >
        See all visas
      </NavLink>

      <Countries />

      <Faq />
    </div>
  );
};

export default Home;
