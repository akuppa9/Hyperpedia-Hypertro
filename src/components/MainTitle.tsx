import React from "react";
import { useNavigate } from "react-router-dom";
const MainTitle = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-white mt-40 ml-8 ">
        <h1 className="text-7xl font-bold">The Hyperpedia</h1>
        <br></br>
        <h1 className="text-6xl font-light">The Ultimate Gym Encyclopedia</h1>
      </div>
      <div className="flex flex-col md:flex-row mt-10 ml-8 space-y-4 md:space-y-0 md:space-x-4">
        <div>
          <a
            href="#"
            className=" font-medium text-3xl bg-gradient-to-l from-cyan-500 to-blue-500 border-blue-400 rounded-full py-3 px-8 hover:bg-gradient-to-bl text-white inline-block hover:border-blue-400 hover:text-white duration-300 hover:border border border-transparent"
            onClick={() => {
              navigate("/hypertrophy");
            }}
          >
            What is Hypertophy ?
          </a>
        </div>
        <div>
          <a
            href="#"
            className="ml-1 font-medium text-3xl border border-blue-500 bg-black rounded-full py-3 px-8 hover:bg-gradient-to-l from-cyan-500 to-blue-500 text-white inline-block hover:border-blue-400 hover:text-white duration-300 hover:border"
            onClick={() => {
              navigate("/body-model");
            }}
          >
            Explore Body Model <span>&#10148;</span>
          </a>
        </div>
      </div>
      <img
        src="src/images/3.png"
        className="hidden w-4/9 h-5/6 xl:block xl:absolute bottom-0 left-[950px]"
      ></img>
    </>
  );
};

export default MainTitle;
