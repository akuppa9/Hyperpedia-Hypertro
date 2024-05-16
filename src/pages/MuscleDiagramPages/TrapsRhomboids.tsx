import React from "react";
import Navbar from "../../components/Navbar";
import MuscleDiagram from "../../components/MuscleDiagram";
import ChatbotPopup from "../../components/ChatbotPopup";
const TrapsRhomboids = () => {
  return (
    <>
      <div className="bg-black">
        <Navbar />
        <div className="text-white mt-5 ml-12 ">
          <h1 className="text-7xl text-blue-400 font-bold">
            {" "}
            Trapezius and Rhomboids{" "}
          </h1>
        </div>
        <div className="text-white mt-12 ml-12 content flex flex-wrap xl:flex-nowrap py-2">
          <img
            src="images/TrapsFinal.png"
            className="object-right h-96 w-96 mr-12"
          ></img>
          <p className="text-xl mt-8 xl:mt-0 mr-20">
            {" "}
            The trapezius, or traps, is made up of three main segments: the
            upper, middle, and lower.
            <br></br>
            <br></br>
            The traps originate from the base of the skull all the way down to
            the T12 vertebrae and insert into the lateral side of the scapula.
            <br></br>
            <br></br>
            The function of the lower trap is to depress and stabilize the spine
            and scapula. The function of the mid trap is to retract the scapula.
            The function of the upper traps is a little more nuanced, and
            various sources conflict with each other. Some say it is to elevate
            the scapula in conjunction with the levator scapulae. The majority
            of the most recent research agrees that due to its more horizontal
            fiber orientation and slow twitch nature, its function is to
            stabilize the neck, upwardly rotate the scapula, and upwardly
            retract the scapula.
          </p>
        </div>
        <div className="text-white mt-12 ml-12 content bg-black flex flex-wrap xl:flex-nowrap py-2">
          <img
            src="images/RhomboidsFinal.png"
            className="object-right h-96 w-96 mr-[90px]"
          ></img>
          <p className="text-xl mt-8 xl:mt-0 mr-20">
            The rhomboids lay beneath the traps and consist of the rhomboid
            major and minor.
            <br></br>
            <br></br>
            The rhomboids are a bit smaller than the traps and originate from
            vertebrae C7 to T5 and insert in the medial portion of the scapula.
            <br></br>
            <br></br>
            The function of the rhomboids is nearly identical to the mid traps,
            which is to retract the scapula. Due to this, both can be trained
            simultaneously with various exercises.
          </p>
        </div>
        <div className="rounded-lg relative overflow-x-auto shadow-md mt-4 bg-black">
          <table className="table-fixed w-10/12 xl:w-11/12 text-sm text-left rtl:text-right text-gray-400 ml-11 mt-6">
            <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-zinc-900">
              <p className="text-blue-400">Trapezius and Rhomboid Exercises</p>
              <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                Here are a few exercises to efficiently grow your traps and
                rhomboids!
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
                  Cable Y Raise
                </th>
                <td className="px-6 py-4">Cables</td>
                <td className="px-6 py-4">Lower Traps</td>
                <td className="px-6 py-4">
                  <a
                    className="text-blue-400"
                    href="https://www.youtube.com/shorts/Ysz0BxwZz1Q"
                    target="_blank"
                  >
                    {" "}
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA0UlEQVR4nO1TOQ7CMBB0C8/gFRGdNw1BpOQ/4RmI1gsSLe+hgRcg7SZQGTkogMEmCQoQpIw01axmvIeF6NBqTOa6D8gISBkg6xtpD4qiou5ek4pOUvGsUoBUvLCNLaOdKyDXkA+l5oDp9PqiVTq0tYuRp4OjRE7E1yGRxvlsPSMBJ+1dvER9c37ahUGI2UAibxwB9lx9Ojho9GCte2b2xcU1GgDIsUTaPoY2GaBdXf0mABqi+LeAuPKS331tUH6mn/5oiiJTXNc8XNLId3kd2oEz/hGPJ9Bn8uwAAAAASUVORK5CYII="></img>
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-zinc-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white"
                >
                  Kelso Shrugs
                </th>
                <td className="px-6 py-4">Dumbells</td>
                <td className="px-6 py-4">Upper Traps</td>
                <td className="px-6 py-4">
                  <a
                    className="text-blue-400"
                    href="https://www.youtube.com/watch?v=qKCuWRx-hKk"
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
                  Tbar Row
                </th>
                <td className="px-6 py-4">Tbar Row Machine</td>
                <td className="px-6 py-4">Mid Traps and Rhomboids </td>
                <td className="px-6 py-4">
                  <a
                    className="text-blue-400"
                    href="https://www.youtube.com/watch?v=lqW5XTNBVl4"
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

export default TrapsRhomboids;
