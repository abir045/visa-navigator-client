import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const AddVisa = () => {
  const { user } = useContext(AuthContext);

  const email = user.email;

  const handleAddVisa = (e) => {
    e.preventDefault();
    const form = e.target;

    const countryImage = form.countryImage.value;
    const country = form.country.value;
    const visaType = form.visaType.value;
    const processingTime = form.processingTime.value;
    // const requiredDocuments = form.requiredDocuments.value;
    const description = form.description.value;
    const age = form.age.value;
    const fee = form.fee.value;
    const validity = form.validity.value;
    const application = form.application.value;

    const requiredDocuments = [
      form.querySelector('input[name="passport"]:checked')
        ? "Valid Passport"
        : null,
      form.querySelector('input[name="visaForm"]:checked')
        ? "Visa Application form"
        : null,
      form.querySelector('input[name="photograph"]:checked')
        ? "Recent Passport-sized photograph"
        : null,
    ].filter((doc) => doc !== null);

    const newVisa = {
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
      email,
    };

    console.log(newVisa);

    //send data to server and database

    fetch("http://localhost:5000/visa", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newVisa),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Visa added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };

  return (
    <div className="flex flex-col justify-center items-center mb-10">
      <h1 className="text-3xl font-bold text-center my-10">Add Visa </h1>
      <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
        <form onSubmit={handleAddVisa} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Country Image</span>
            </label>
            <input
              type="text"
              placeholder="country-image"
              name="countryImage"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Country</span>
            </label>
            <input
              type="text"
              placeholder="country"
              name="country"
              className="input input-bordered"
              required
            />
          </div>

          <select
            className="select select-bordered w-full max-w-xs"
            name="visaType"
          >
            <option disabled value="DEFAULT">
              Visa Type?
            </option>
            <option>Tourist visa</option>
            <option>Student Visa</option>
            <option>Official Visa</option>
            <option>Work Visa</option>
            <option>Business Visa</option>
          </select>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Processing time</span>
            </label>
            <input
              type="text"
              placeholder="processing time"
              name="processingTime"
              className="input input-bordered"
              required
            />
          </div>

          {/* checkbox */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Required documents?</span>
            </label>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" name="passport" className="checkbox" />
                <span className="label-text">Valid Passport</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" name="visaForm" className="checkbox" />
                <span className="label-text">Visa Application form</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" name="photograph" className="checkbox" />
                <span className="label-text">
                  Recent Passport-sized photograph
                </span>
              </label>
            </div>
          </div>

          {/* <select
            className="select select-bordered w-full max-w-xs"
            name="requiredDocuments"
          >
            <option disabled value="DEFAULT">
              Required documents?
            </option>
            <option>Valid Passport</option>
            <option>Visa Application form</option>
            <option>Recent Passport-sized photograph</option>
          </select> */}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              placeholder="description"
              className="input input-bordered"
              name="description"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Age Restriction</span>
            </label>
            <input
              type="number"
              placeholder="age-restriction"
              className="input input-bordered"
              name="age"
              required
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
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Validity</span>
            </label>
            <input
              type="text"
              name="validity"
              placeholder="validity"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Application Method</span>
            </label>
            <input
              type="text"
              placeholder="application method"
              name="application"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-neutral">
              Add visa
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVisa;
