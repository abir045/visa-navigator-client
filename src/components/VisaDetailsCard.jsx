import React from "react";

const VisaDetailsCard = ({ visas }) => {
  console.log(visas);
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={visas.countryImage}
            alt="Shoes"
            className="rounded-xl w-full h-[200px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{country}</h2>
          <p>{visaType}</p>
          <p>Processing Time: {processingTime}</p>
          <p>Fee: {fee} $</p>
          <p>Validity: {validity}</p>
          <p>Application Method: {application}</p>
          <div className="card-actions">
            <Link to={`/visa/${visa._id}`} className="btn btn-neutral">
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaDetailsCard;
