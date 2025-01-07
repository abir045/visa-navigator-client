import React from "react";
import { Link, useLocation } from "react-router-dom";

const VisaCard = ({
  visa,
  handleOpenUpdateModal,
  handleDelete,
  handleDeleteApplication,
}) => {
  const {
    countryImage,
    country,
    visaType,
    processingTime,
    requiredDocuments,
    description,
    age,
    fee,
    validity,
    application,
    _id,
    currenDate,
    name,
    email,
  } = visa;

  const { pathname } = useLocation();
  // console.log(pathname);
  return (
    <div>
      <div className="card bg-base-100 shadow-xl dark:bg-gray-800 dark:text-white ">
        <figure className="px-10 pt-10">
          <img
            src={countryImage}
            alt="Shoes"
            className="rounded-xl w-[400px] h-[200px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{country}</h2>
          <p>{visaType}</p>
          <p>Processing Time: {processingTime}</p>
          <p>Fee: {fee} $</p>
          <p>Validity: {validity}</p>
          <p>Application Method: {application}</p>

          {pathname === "/myvisaapplication" && (
            <div className="flex flex-col gap-4">
              <p>Applied_date: {currenDate}</p>
              <p>Name: {name}</p>
              <p>Email: {email}</p>
              <button
                onClick={() => handleDeleteApplication(_id)}
                className="btn btn-neutral my-5"
              >
                Cancel
              </button>
            </div>
          )}

          {pathname === "/myaddedvisas" && (
            <div className="flex items-center gap-4 my-5">
              <div>
                <button
                  onClick={() => handleOpenUpdateModal(visa)}
                  className="btn btn-neutral"
                >
                  Update
                </button>
              </div>
              <div>
                <button
                  onClick={() => handleDelete(_id)}
                  className="btn btn-neutral"
                >
                  Delete
                </button>
              </div>
            </div>
          )}

          {(pathname === "/allvisas" || pathname === "/") && (
            <div className="card-actions">
              <Link to={`/visa/${visa._id}`} className="btn btn-neutral">
                See Details
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VisaCard;
