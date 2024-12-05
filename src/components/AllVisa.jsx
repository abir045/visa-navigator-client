import React from "react";
import { useLoaderData } from "react-router-dom";
import VisaCard from "./VisaCard";

const AllVisa = () => {
  const loadedVisas = useLoaderData();

  return (
    <div>
      <h3 className="text-center text-4xl my-10 oswald">All Visa's</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  max-w-6xl px-5 mx-auto my-10">
        {loadedVisas.map((visa) => (
          <VisaCard key={visa._id} visa={visa} />
        ))}
      </div>
    </div>
  );
};

export default AllVisa;
