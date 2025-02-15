import React, { useContext, useState } from "react";
import globe from "../assets/globe.svg";
import earth from "../assets/Earth.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  const [dark, setDark] = useState(false);
  const { user, logout } = useContext(AuthContext);

  // console.log(user);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allvisas">All Visa's</NavLink>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>

      {user && user?.email ? (
        <>
          {" "}
          <li>
            <NavLink to="/addvisa">Add Visa</NavLink>
          </li>
          <li>
            <NavLink to="/myaddedvisas">My added visas</NavLink>
          </li>
          <li>
            <NavLink to="/myvisaapplication">My Visa Applications</NavLink>
          </li>{" "}
        </>
      ) : (
        ""
      )}

      <button
        className="flex items-center ml-3 my-2"
        onClick={() => darkModeHandler()}
      >
        {dark && <MdOutlineWbSunny size={20} />}
        {!dark && <FaMoon />}
      </button>
      {/* <li className="ml-5">
        <NavLink to="/login">Login</NavLink>
      </li> */}
      {/* <li>
        <NavLink to="/register">Register</NavLink>
      </li> */}
    </>
  );

  return (
    <div className="navbar fixed z-10   bg-sky-700 text-white dark:bg-gray-900 dark:text-white   ">
      <div className="navbar-start">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2  shadow bg-sky-700 text-white"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img src={earth} className="w-10" alt="" /> Visa Navigator
        </a>
      </div>
      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user && user?.email ? (
          <>
            <div className="flex items-center relative">
              <div className="">
                <img
                  className="w-10 rounded-full"
                  src={user?.photoURL || <FaRegUser />}
                  alt=""
                />
              </div>

              <div className="opacity-0 hover:opacity-100 absolute right-[50%]">
                <div className="flex  items-center">
                  <p>{user?.displayName}</p>
                  <button
                    className="btn btn-neutral rounded-xl"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex gap-1">
            <Link className="btn btn-sm" to="/login">
              Log In
            </Link>

            <Link className="btn btn-sm" to="/register">
              Register
            </Link>
          </div>
        )}
        {/* <a className="btn">Button</a> */}
      </div>
    </div>
  );
};

export default Header;
