import React from "react";

const UpdateVisa = () => {
  return (
    <div>
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Apply for this Visa</h3>
          <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
            <form className="card-body">
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

              <select
                className="select select-bordered w-full max-w-xs"
                name="requiredDocuments"
              >
                <option disabled value="DEFAULT">
                  Required documents?
                </option>
                <option>Valid Passport</option>
                <option>Visa Application form</option>
                <option>Recent Passport-sized photograph</option>
              </select>

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

export default UpdateVisa;
