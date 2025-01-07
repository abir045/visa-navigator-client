import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

import { AuthContext } from "../provider/AuthProvider";
import moment from "moment";
import Swal from "sweetalert2";
import Loading from "./Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VisaDetails = () => {
  //   const visa = useLoaderData();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  //   console.log(visa);

  const { id } = useParams();

  const [visas, setVisas] = useState(null);

  const { user } = useContext(AuthContext);

  const email = user?.email;

  const date = moment();

  const currenDate = date.format("D/MM/YYYY");

  useEffect(() => {
    const fetchVisaDetails = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://visa-navigator-server-three.vercel.app/visa/${id}`
        );

        // if (!response.ok) {
        //   throw new Error("Failed to fetch visa details");
        // }

        const data = await response.json();
        setVisas(data);
      } catch (err) {
        // setError(err.message);
        toast.error(err.message || "Failed to register , Please try again");
      } finally {
        setIsLoading(false);
      }
    };

    fetchVisaDetails();
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
  } = visas;

  const handleAddApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;

    //console.log(firstName, lastName);

    const newApplication = {
      name: firstName + " " + lastName,
      email,
      currenDate,
      fee,
      country,
      countryImage,
      visaType,
      processingTime,
      validity,
      application,
    };

    fetch("https://visa-navigator-server-three.vercel.app/apply", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "You applied added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          //close modal
          const modal = document.getElementById("my_modal_4");
          modal.close();
        }
      });
  };

  //console.log(visas);

  return (
    <div>
      <h2 className="text-center pt-32 text-3xl font-bol oswald">
        Visa Details
      </h2>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={countryImage}
            alt="Shoes"
            className="rounded-xl w-[400px] h-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold">{country}</h2>
          <p className="font-semibold">{visaType}</p>
          <p>Processing Time: {processingTime}</p>
          <p>Fee: {fee} $</p>
          <p>Validity: {validity}</p>
          <p>Application Method: {application}</p>
          <p>Description: {description}</p>
          <p className="font-bold">
            Required Documents: {/* <ul className="font-semibold"> */}
            {requiredDocuments.map((doc, index) => (
              <li key={index}>{doc}</li>
            ))}
            {/* </ul> */}
          </p>

          <p>Age Restriction: {age}</p>
          <div className="card-actions">
            <button
              onClick={() => document.getElementById("my_modal_4").showModal()}
              className="btn btn-neutral my-5 btn-wide"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Apply for this Visa</h3>
          <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
            <form onSubmit={handleAddApplication} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  placeholder="first name"
                  name="firstName"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  placeholder="last name"
                  name="lastName"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                  defaultValue={email}
                  // readOnly
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="text"
                  placeholder="age-restriction"
                  className="input input-bordered"
                  name="date"
                  defaultValue={currenDate}
                  readOnly
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Fee</span>
                </label>
                <input
                  type="number"
                  placeholder="application fee"
                  className="input input-bordered"
                  name="fee"
                  required
                  defaultValue={fee}
                  readOnly
                />
              </div>

              <div className="form-control mt-6">
                <div className="modal-action" method="dialog">
                  <button type="submit" className="btn btn-neutral">
                    Apply
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </dialog>
      <ToastContainer />
    </div>
  );
};

export default VisaDetails;
