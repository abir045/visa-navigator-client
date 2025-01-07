import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "./Loading";
import VisaCard from "../components/VisaCard";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyVisaApplication = () => {
  const { user } = useContext(AuthContext);

  const [applications, setApplications] = useState([]);
  // const [filteredApplications, setFilteredApplications] = useState([]);
  const [displayApplications, setDisplayApplications] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [viewType, setViewType] = useState("card");

  const email = user?.email;

  useEffect(() => {
    const fetchUserApplications = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://visa-navigator-server-three.vercel.app/apply/${email}`
        );

        const data = await response.json();
        //console.log(data);
        setApplications(data);
        setDisplayApplications(data);
      } catch (error) {
        //console.log("Error fetching applications:", error);
        toast.error(error.message || "Failed to register , Please try again");
      } finally {
        setLoading(false);
      }
    };
    fetchUserApplications();
  }, [email]);

  if (loading) {
    return <Loading />;
  }

  const handleDeleteApplication = (_id) => {
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
        fetch(`https://visa-navigator-server-three.vercel.app/apply/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your added visa has been deleted.",
                icon: "success",
              });
              const remaining = applications.filter((visa) => visa._id !== _id);
              setApplications(remaining);
              setDisplayApplications(remaining);
            }
          });
      }
    });
  };

  const handleSearchTermChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // If search term is empty, reset to all applications
    if (term === "") {
      setDisplayApplications(applications);
    }
  };

  const handleSearch = () => {
    const filtered = applications.filter((visa) =>
      visa.country.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDisplayApplications(filtered);
  };

  const TableView = () => (
    <div className="overflow-x-auto pb-10">
      <table className="table  w-full">
        <thead className="">
          <tr className="bg-base-200 dark:bg-gray-900 dark:text-white ">
            <th>Country</th>
            <th>Visa Type</th>
            <th>Processing Time</th>

            <th>Fee</th>
            <th>Validity</th>
            <th>Application Method</th>
            <th>Applied Date</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {displayApplications.map((visa) => (
            <tr key={visa._id} className="">
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="w-12 h-12 rounded-full">
                      <img src={visa.countryImage} alt={visa.country} />
                    </div>
                  </div>
                  <span className="font-semibold">{visa.country}</span>
                </div>
              </td>
              <td>{visa.visaType}</td>
              <td>{visa.processingTime}</td>

              <td>${visa.fee}</td>
              <td>
                <span>{visa.validity}</span>
              </td>
              <td>{visa.application}</td>
              <td>{visa.currenDate}</td>
              <td>{visa.email}</td>

              <td>
                <div>
                  <button
                    onClick={() => handleDeleteApplication(visa._id)}
                    className="btn btn-sm btn-neutral"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="px-5  dark:bg-gray-900 dark:text-white">
      <h2 className="text-center oswald font-bold text-3xl pt-32">
        My application
      </h2>
      <div className="flex justify-center items-center mt-10 gap-4">
        <label className="text-sm font-medium">View:</label>
        <select
          className="select select-bordered select-sm w-32 dark:bg-gray-900 dark:text-white"
          value={viewType}
          onChange={(e) => setViewType(e.target.value)}
        >
          <option value="card">Card View</option>
          <option value="table">Table View</option>
        </select>
      </div>

      {/* search functions */}
      <div className="flex justify-center  mt-10 mb-10">
        <div className="flex w-full max-w-md">
          <input
            type="text"
            placeholder="Search by country "
            className="input input-bordered w-full mr-2 dark:bg-gray-900 dark:text-white"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
          <button className="btn btn-neutral" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      {viewType === "card" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {displayApplications.map((visa) => (
            <VisaCard
              key={visa._id}
              handleDeleteApplication={handleDeleteApplication}
              visa={visa}
            />
          ))}
        </div>
      ) : (
        <div className="max-w-7xl mx-auto ">
          <TableView />
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default MyVisaApplication;
