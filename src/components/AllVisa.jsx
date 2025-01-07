import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import VisaCard from "./VisaCard";

const AllVisa = () => {
  const loadedVisas = useLoaderData();

  const [selectedType, setSelectedType] = useState("All");

  const visaTypes = [
    "All",
    ...new Set(loadedVisas.map((visa) => visa.visaType)),
  ];

  const filteredVisas =
    selectedType === "All"
      ? loadedVisas
      : loadedVisas.filter((visa) => visa.visaType === selectedType);

  return (
    <div>
      <h3 className="text-center text-4xl pt-32 oswald">All Visa's</h3>

      <h5 className="text-center my-5 text-2xl font-semibold">
        Filter Visa's by Visa Type
      </h5>
      <div className="w-full flex justify-center mb-10">
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          {visaTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  max-w-6xl px-5 mx-auto my-10">
        {filteredVisas.map((visa) => (
          <VisaCard key={visa._id} visa={visa} />
        ))}
      </div>
    </div>
  );
};

export default AllVisa;
