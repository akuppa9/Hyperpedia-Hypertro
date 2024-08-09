import React from "react";
import Navbar from "../../components/Navbar";
import MuscleDiagram from "../../components/MuscleDiagram";
import ChatbotPopup from "../../components/ChatbotPopup";
const Lat = () => {
  return (
    <>
      <div className="bg-black">
        <Navbar />
        <div className="text-white mt-5 ml-16 ">
          <h1 className="text-7xl text-blue-400 font-bold">
            {" "}
            Lats and Teres Major{" "}
          </h1>
        </div>
        <div className="text-white mt-12 ml-12 content flex flex-wrap xl:flex-nowrap py-2">
          <img
            loading="lazy"
            src="images/LatFinal.png"
            className="object-right h-96 w-96 mr-12"
          ></img>
          <p className="text-xl mt-8 xl:mt-0 mr-20">
            {" "}
            The latissimus dorsi, or lat, is a large back muscle that is
            typically considered to be divided into the thoracic (upper) region
            and the lumbar (lower) region.
            <br></br>
            <br></br>
            The lat originates from the T7 vertebrae of the spine all the way to
            the iliac crest and inserts into the upper portion of the humerus.
            The lats have two main functions: shoulder extension and humeral
            adduction.
            <br></br>
            <br></br>A wide grip pulldown will train the lats through their
            function of humeral adduction. The wide grip limits the movement's
            elbow flexion component, allowing the lats to have more leverage,
            specifically the lower lats. A neutral shoulder-width row will train
            the lats through their function of shoulder extension and will bias
            the upper lats. Do not pull behind the torso, as once the scapula
            retracts, the upper back will take over the movement.
          </p>
        </div>
        <div className="text-white mt-12 ml-12 content bg-black flex flex-wrap xl:flex-nowrap py-2">
          <img
            loading="lazy"
            src="images/TeresFinal.png"
            className="object-right h-96 w-96 mr-[53px]"
          ></img>
          <p className="text-xl mt-8 xl:mt-0 mr-20">
            The teres major originates from the base of the scapula and inserts
            into the upper part of the humerus.
            <br></br>
            <br></br>
            The function of the teres major is almost identical to that of the
            lats, hence why they are often dubbed the 'lats' little helper.
          </p>
        </div>
        <div className="rounded-lg relative overflow-x-auto shadow-md mt-4 bg-black">
          <table className="table-fixed w-10/12 xl:w-11/12 text-sm text-left rtl:text-right text-gray-400 ml-11 mt-6">
            <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-zinc-900">
              <p className="text-blue-400">Lat and Teres Major Exercises</p>
              <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                Here are a few exercises to efficiently grow your lats and teres
                major!
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
                  Wide Grip Lat Pulldown
                </th>
                <td className="px-6 py-4">Lat Pulldown Machine</td>
                <td className="px-6 py-4">Lumbar Lats and Teres Major</td>
                <td className="px-6 py-4">
                  <a
                    className="text-blue-400"
                    href="https://www.youtube.com/watch?v=lueEJGjTuPQ"
                    target="_blank"
                  >
                    {" "}
                    <img
                      loading="lazy"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA0UlEQVR4nO1TOQ7CMBB0C8/gFRGdNw1BpOQ/4RmI1gsSLe+hgRcg7SZQGTkogMEmCQoQpIw01axmvIeF6NBqTOa6D8gISBkg6xtpD4qiou5ek4pOUvGsUoBUvLCNLaOdKyDXkA+l5oDp9PqiVTq0tYuRp4OjRE7E1yGRxvlsPSMBJ+1dvER9c37ahUGI2UAibxwB9lx9Ojho9GCte2b2xcU1GgDIsUTaPoY2GaBdXf0mABqi+LeAuPKS331tUH6mn/5oiiJTXNc8XNLId3kd2oEz/hGPJ9Bn8uwAAAAASUVORK5CYII="
                    ></img>
                  </a>
                </td>
              </tr>
              <tr className="bg-white dark:bg-zinc-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white"
                >
                  Neutral Grip Cable Row
                </th>
                <td className="px-6 py-4">Cables</td>
                <td className="px-6 py-4">Thoracic Lats</td>
                <td className="px-6 py-4">
                  <a
                    className="text-blue-400"
                    href="https://www.youtube.com/watch?v=GZbfZ033f74"
                    target="_blank"
                  >
                    {" "}
                    <img
                      loading="lazy"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA0UlEQVR4nO1TOQ7CMBB0C8/gFRGdNw1BpOQ/4RmI1gsSLe+hgRcg7SZQGTkogMEmCQoQpIw01axmvIeF6NBqTOa6D8gISBkg6xtpD4qiou5ek4pOUvGsUoBUvLCNLaOdKyDXkA+l5oDp9PqiVTq0tYuRp4OjRE7E1yGRxvlsPSMBJ+1dvER9c37ahUGI2UAibxwB9lx9Ojho9GCte2b2xcU1GgDIsUTaPoY2GaBdXf0mABqi+LeAuPKS331tUH6mn/5oiiJTXNc8XNLId3kd2oEz/hGPJ9Bn8uwAAAAASUVORK5CYII="
                    ></img>
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

export default Lat;
