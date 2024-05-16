import React from "react";
import Navbar from "../../components/Navbar";
import MuscleDiagram from "../../components/MuscleDiagram";
import ChatbotPopup from "../../components/ChatbotPopup";
const UpperAbdominals = () => {
  return (
    <>
      <div className="bg-black">
        <Navbar />
        <div className="text-white mt-5 ml-12 ">
          <h1 className="text-7xl text-blue-400 font-bold">
            {" "}
            Upper Abdominals{" "}
          </h1>
        </div>
        <div className="text-white mt-12 ml-12 content flex flex-wrap xl:flex-nowrap py-2">
          <img
            src="images/UpperAbsFinal.png"
            className="object-right h-96 w-96 mr-12"
          ></img>
          <p className="text-xl mt-8 xl:mt-0 mr-20">
            {" "}
            The upper abdominals, or upper abs, are part of the core and one of
            the main divisions of the rectus abdominis. The upper abs are the
            larger of the two divisions and are often more prominent within a
            physique. The abdominal muscle divisions are often discussed for
            clarity, and the actual function of both divisions is the same.
            <br></br>
            <br></br>
            The primary function of the abs is spinal flexion.
            <br></br>
            <br></br>
            The divisions of the abdominals can be biased, despite them sharing
            the same function. To bias the upper abs, exercises that bring the
            upper body toward the hips and legs are best. Recent research has
            shown that instead of creating motion, the core sees the most
            progress in exercises that resist motion.
          </p>
        </div>
        <div className="rounded-lg relative overflow-x-auto shadow-md mt-4 bg-black">
          <table className="table-fixed w-10/12 xl:w-11/12 text-sm text-left rtl:text-right text-gray-400 ml-11 mt-6">
            <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-zinc-900">
              <p className="text-blue-400">Upper Abdominal Exercises</p>
              <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                Here are a few exercises to efficiently grow your upper abs!
              </p>
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-zinc-800 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Exercise
                </th>
                <th scope="col" className="px-6 py-3">
                  Equipment
                </th>
                <th scope="col" className="px-6 py-3">
                  Target Muscle
                </th>
                <th scope="col" className="px-6 py-3">
                  Video
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-zinc-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white"
                >
                  Cable Ab Crunch
                </th>
                <td className="px-6 py-4">Cables </td>
                <td className="px-6 py-4">Upper Abs</td>
                <td className="px-6 py-4">
                  <a
                    className="text-blue-400"
                    href="https://www.youtube.com/watch?v=3qjoXDTuyOE"
                    target="_blank"
                  >
                    {" "}
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA0UlEQVR4nO1TOQ7CMBB0C8/gFRGdNw1BpOQ/4RmI1gsSLe+hgRcg7SZQGTkogMEmCQoQpIw01axmvIeF6NBqTOa6D8gISBkg6xtpD4qiou5ek4pOUvGsUoBUvLCNLaOdKyDXkA+l5oDp9PqiVTq0tYuRp4OjRE7E1yGRxvlsPSMBJ+1dvER9c37ahUGI2UAibxwB9lx9Ojho9GCte2b2xcU1GgDIsUTaPoY2GaBdXf0mABqi+LeAuPKS331tUH6mn/5oiiJTXNc8XNLId3kd2oEz/hGPJ9Bn8uwAAAAASUVORK5CYII="></img>
                  </a>
                </td>
              </tr>
              <tr className="bg-white dark:bg-zinc-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white"
                >
                  Ab Crunch Machine
                </th>
                <td className="px-6 py-4">Ab Crunch Machine</td>
                <td className="px-6 py-4">Upper Abs</td>
                <td className="px-6 py-4">
                  <a
                    className="text-blue-400"
                    href="https://www.youtube.com/watch?v=fuPFq2EYswE"
                    target="_blank"
                  >
                    {" "}
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA0UlEQVR4nO1TOQ7CMBB0C8/gFRGdNw1BpOQ/4RmI1gsSLe+hgRcg7SZQGTkogMEmCQoQpIw01axmvIeF6NBqTOa6D8gISBkg6xtpD4qiou5ek4pOUvGsUoBUvLCNLaOdKyDXkA+l5oDp9PqiVTq0tYuRp4OjRE7E1yGRxvlsPSMBJ+1dvER9c37ahUGI2UAibxwB9lx9Ojho9GCte2b2xcU1GgDIsUTaPoY2GaBdXf0mABqi+LeAuPKS331tUH6mn/5oiiJTXNc8XNLId3kd2oEz/hGPJ9Bn8uwAAAAASUVORK5CYII="></img>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mt-12"></div>
          <ChatbotPopup />
        </div>
      </div>
    </>
  );
};

export default UpperAbdominals;
