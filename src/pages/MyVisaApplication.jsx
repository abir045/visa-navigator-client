import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "./Loading";
import VisaCard from "../components/VisaCard";
import Swal from "sweetalert2";

const MyVisaApplication = () => {
  const { user } = useContext(AuthContext);

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  const email = user?.email;

  useEffect(() => {
    const fetchUserApplications = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/apply/${email}`);

        const data = await response.json();
        console.log(data);
        setApplications(data);
      } catch (error) {
        console.log("Error fetching applications:", error);
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
        fetch(`http://localhost:5000/apply/${_id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your added visa has been deleted.",
                icon: "success",
              });
              const remaining = applications.filter((visa) => visa._id !== _id);
              setApplications(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <h2 className="text-center oswald font-bold text-3xl my-5">
        My application
      </h2>
      <div>
        {applications.map((visa) => (
          <VisaCard
            key={visa._id}
            handleDeleteApplication={handleDeleteApplication}
            visa={visa}
          />
        ))}
      </div>
    </div>
  );
};

export default MyVisaApplication;
