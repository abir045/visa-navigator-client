import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h2 className="text-center text-2xl pt-40">Page Not Found</h2>
      <div className="mt-10 mx-auto flex justify-center">
        <Link to="/" className="btn btn-neutral btn-wide">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
