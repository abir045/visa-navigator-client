import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import VisaCard from "../components/VisaCard";
import Swal from "sweetalert2";

const MyAddedVisa = () => {
  const { user } = useContext(AuthContext);
  const loadedVisas = useLoaderData();
  const [selectedVisa, setSelectedVisa] = useState(null);
  const [selectId, setSelectedId] = useState(null);

  const myAddedVisas = loadedVisas.filter((visa) => visa.email === user?.email);

  const [shownVisas, setShownVisas] = useState(myAddedVisas);

  //console.log(myAddedVisas);

  const handleOpenUpdateModal = (visa) => {
    setSelectedVisa(visa);
    setSelectedId(selectedVisa._id);
    document.getElementById("my_modal_5").showModal();
  };

  const handleUpdate = (e) => {
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

    const updatedVisa = {
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
    };

    //console.log(updatedVisa);

    //send data to server
    fetch(`http://localhost:5000/visa/${selectId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedVisa),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Visa updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });

          const modal = document.getElementById("my_modal_5");
          modal.close();
        }
      });
  };

  // delete function
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/visa/${_id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            //  console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your added visa has been deleted.",
                icon: "success",
              });
              const remaining = myAddedVisas.filter((visa) => visa._id !== _id);
              setShownVisas(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      {" "}
      <h2 className="text-center text-3xl oswald my-10">My added Visa</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {shownVisas.map((visa) => (
          <VisaCard
            key={visa._id}
            visa={visa}
            handleOpenUpdateModal={handleOpenUpdateModal}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Update this Visa</h3>
          <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
            <form onSubmit={handleUpdate} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Country Image</span>
                </label>
                <input
                  type="text"
                  placeholder="country-image"
                  name="countryImage"
                  className="input input-bordered"
                  defaultValue={selectedVisa?.countryImage}
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
                  defaultValue={selectedVisa?.country}
                  className="input input-bordered"
                  required
                />
              </div>

              <select
                className="select select-bordered w-full max-w-xs"
                name="visaType"
                defaultValue={selectedVisa?.visaType}
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
                  defaultValue={selectedVisa?.processingTime}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Required documents?</span>
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="passport"
                      className="checkbox"
                      // Add checked state based on existing documents
                      defaultChecked={selectedVisa?.requiredDocuments?.includes(
                        "Valid Passport"
                      )}
                    />
                    <span className="label-text">Valid Passport</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="visaForm"
                      className="checkbox"
                      // Add checked state based on existing documents
                      defaultChecked={selectedVisa?.requiredDocuments?.includes(
                        "Visa Application form"
                      )}
                    />
                    <span className="label-text">Visa Application form</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="photograph"
                      className="checkbox"
                      // Add checked state based on existing documents
                      defaultChecked={selectedVisa?.requiredDocuments?.includes(
                        "Recent Passport-sized photograph"
                      )}
                    />
                    <span className="label-text">
                      Recent Passport-sized photograph
                    </span>
                  </label>
                </div>
              </div>

              {/* <select
                className="select select-bordered w-full max-w-xs"
                name="requiredDocuments"
                defaultValue={selectedVisa?.requiredDocuments}
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
                  defaultValue={selectedVisa?.description}
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
                  defaultValue={selectedVisa?.age}
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
                  defaultValue={selectedVisa?.fee}
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
                  defaultValue={selectedVisa?.validity}
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
                  defaultValue={selectedVisa?.application}
                  required
                />
              </div>

              <div className="form-control mt-6">
                <div className="modal-action" method="dialog">
                  <button type="submit" className="btn btn-neutral">
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyAddedVisa;
