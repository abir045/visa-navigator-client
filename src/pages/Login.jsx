import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const { userLogin, setUser, signInWithGoogle } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error(err.message || "Failed to log in , please try again");
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error(err.message || "failed to login, please try again");
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0  rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">
          {" "}
          Login your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
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

            <label className="label">
              <Link to={"/"} className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>

          <div>
            <button onClick={handleGoogleSignIn} className="btn btn-neutral">
              Log In with <FaGoogle />
            </button>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none" type="submit">
              Login
            </button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Dont’t Have An Account ?{" "}
          <Link className="text-red-500" to="/register">
            Register
          </Link>{" "}
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
