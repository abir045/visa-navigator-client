import React from "react";
import Slider from "../components/Slider";
import SliderImg from "../components/Slider";
import { NavLink, useLoaderData } from "react-router-dom";
import VisaCard from "../components/VisaCard";

const Home = () => {
  const loadedVisas = useLoaderData();
  const showedVisas = loadedVisas.slice(0, 6);

  return (
    <div>
      <SliderImg />

      <div>
        <h3 className="text-center text-4xl font-bold mb-5">Visa Categories</h3>
        <h4 className="text-center text-3xl">
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
    </div>
  );
};

export default Home;
