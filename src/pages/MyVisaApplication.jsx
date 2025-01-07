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

  return (
    <div className="px-5  dark:bg-gray-900 dark:text-white">
      <h2 className="text-center oswald font-bold text-3xl pt-32">
        My application
      </h2>

      {/* search functions */}
      <div className="flex justify-center mb-5 mt-10">
        <div className="flex w-full max-w-md">
          <input
            type="text"
            placeholder="Search by country"
            className="input input-bordered w-full mr-2 dark:bg-gray-900 dark:text-white"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
          <button className="btn btn-neutral" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {displayApplications.map((visa) => (
          <VisaCard
            key={visa._id}
            handleDeleteApplication={handleDeleteApplication}
            visa={visa}
          />
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default MyVisaApplication;
