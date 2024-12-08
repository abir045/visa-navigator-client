import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createNewUser, setUser, updateUserProfile, signInWithGoogle } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    //console.log(name, photo);

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must have at least 6 characters, include an uppercase and a lowercase letter"
      );

      return;
    }

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        //console.log(user);
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/login");
          })
          .catch((err) => {
            toast.error(err.message || "Failed to register, Please try again");
          });
      })
      .catch((err) => {
        toast.error(err.message || "Failed to register , please try again ");
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        // console.log(user);
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error(err.message || "Failed to log in, please try again");
      });
  };

  return (
    <div>
      <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-lg shrink-0  rounded-none p-10">
          <h2 className="text-2xl font-semibold text-center">
            {" "}
            Register your account
          </h2>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="photo-url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>

            <div>
              <button onClick={handleGoogleSignIn} className="btn btn-neutral">
                Log In with <FaGoogle />
              </button>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral rounded-none">Register</button>
            </div>
          </form>
          <p className="text-center font-semibold">
            Allready Have An Account ?{" "}
            <Link className="text-red-500" to="/login">
              Login
            </Link>{" "}
          </p>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;
