import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar bg-black fixed top-0 left-0 right-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-4 shadow bg-black rounded-box w-52"
            >
              <li>
                <a
                  onClick={() => {
                    navigate("/about-hyperpedia");
                  }}
                >
                  About the Hyperpedia
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    navigate("/about-hypertro");
                  }}
                >
                  About Hypertro
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    navigate("/hypertrophy");
                  }}
                >
                  What is Hypertrophy?
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    navigate("/structure-a-workout");
                  }}
                >
                  Structure A Workout
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    navigate("/glossary");
                  }}
                >
                  Glossary
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    navigate("/body-model");
                  }}
                >
                  Body Model
                </a>
              </li>
            </ul>
          </div>
          <a
            onClick={() => {
              navigate("/");
            }}
            className="btn btn-ghost normal-case text-xl text-white"
          >
            Hyperpedia
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">
            <li>
              <a
                onClick={() => {
                  navigate("/about-hyperpedia");
                }}
              >
                About the Hyperpedia
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate("/about-hypertro");
                }}
              >
                About Hypertro
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate("/hypertrophy");
                }}
              >
                What is Hypertrophy?
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate("/structure-a-workout");
                }}
              >
                Structure A Workout
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate("/glossary");
                }}
              >
                Glossary
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate("/body-model");
                }}
              >
                Body Model
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar-end"></div>
      </div>
      <div className="pb-12"></div>
    </>
  );
};

export default Navbar;
