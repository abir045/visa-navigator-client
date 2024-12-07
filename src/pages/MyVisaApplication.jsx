import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "./Loading";
import VisaCard from "../components/VisaCard";

const MyVisaApplication = () => {
  const { user } = useContext(AuthContext);

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  const email = user.email;

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

  return (
    <div>
      <h2 className="text-center oswald font-bold text-3xl my-5">
        My application
      </h2>
      <div>
        {applications.map((visa) => (
          <VisaCard visa={visa} />
        ))}
      </div>
    </div>
  );
};

export default MyVisaApplication;
