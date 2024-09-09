import React from "react";
import Navbar from "../../components/Navbar";
import MuscleDiagram from "../../components/MuscleDiagram";
import ChatbotPopup from "../../components/ChatbotPopup";
const Forearm = () => {
  return (
    <>
      <div className="bg-black">
        <Navbar />
        <div className="text-white mt-5 ml-16 ">
          <h1 className="text-7xl text-blue-400 font-bold"> Forearms </h1>
        </div>
        <div className="text-white mt-12 ml-12 content flex flex-wrap xl:flex-nowrap py-2">
          <img
            src="images/BrachioradialisFinal.png"
            className="object-right h-96 xl:w-96 mr-12"
          ></img>
          <p className="text-xl mt-8 xl:mt-0 mr-20">
            {" "}
            The forearms can be divided into three major components - the
            brachioradialis, the flexors, and the extensors.
            <br></br>
            <br></br>
            The brachioradialis is a single muscle and is the largest muscle in
            the forearm. It originates from the base of the humerus all the way
            down to the base of the radius on the medial side of the arm.
            <br></br>
            <br></br>
            The function of this muscle is elbow flexion, which works in
            conjunction with the biceps and brachialis. However, EMG analysis
            has shown that the brachioradialis is more active when the hand is
            pronated in the presence of elbow flexion. EMG analysis has also
            shown that the muscle is more active at higher degrees of elevation.
            Thus, doing a reverse curl leaning forward or on a seated row allows
            the resistance profile to match that of the muscle’s leverage.
          </p>
        </div>
        <div className="text-white mt-12 ml-12 content bg-black flex flex-wrap xl:flex-nowrap py-2">
          <img
            src="images/FlexorFinal.png"
            className="object-right h-96 xl:w-96 mr-[65px]"
          ></img>
          <img
            src="images/ExtensorFinal.png"
            className="object-right h-96 xl:w-96 mr-[35px]"
          ></img>
          <p className="text-xl mt-8 xl:mt-0 mr-20">
            The forearm flexors and extensors are a group of smaller muscles
            located in the forearm that flex and extend the wrist, respectively.
            <br></br>
            <br></br>
            The flexor carpi originates from the medial side and inserts into
            the second and third metacarpal of the wrist. The extensor
            digitorum, a large forearm extensor, originates from the medial side
            of the humerus and inserts into the wrist and fingers.
            <br></br>
            <br></br>
            The forearm flexors flex the wrist, as in a straight-bar
            forearm-supported wrist curl. The forearm extensors extend the
            wrist, as in a straight-bar forearm-supported wrist extension.
          </p>
        </div>
        <div className="rounded-lg relative overflow-x-auto shadow-md mt-4 bg-black">
          <table className="table-fixed w-10/12 xl:w-11/12 text-sm text-left rtl:text-right text-gray-400 ml-11 mt-6">
            <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-zinc-900">
              <p className="text-blue-400">Forearm Exercises</p>
              <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                Here are a few exercises to efficiently grow your forearms!
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
                  Reverse Curl
                </th>
                <td className="px-6 py-4">Barbell</td>
                <td className="px-6 py-4">Brachioradialis</td>
                <td className="px-6 py-4">
                  <a
                    className="text-blue-400"
                    href="https://www.youtube.com/watch?v=hUA-fIpM7nA"
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
                  Wrist Curls
                </th>
                <td className="px-6 py-4">Dumbells</td>
                <td className="px-6 py-4">Forearm Flexors</td>
                <td className="px-6 py-4">
                  <a
                    className="text-blue-400"
                    href="https://www.youtube.com/watch?v=3VLTzIrnb5g"
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
                  Wrist Extensions
                </th>
                <td className="px-6 py-4">Dumbells</td>
                <td className="px-6 py-4">Forearm Extensors</td>
                <td className="px-6 py-4">
                  <a
                    className="text-blue-400"
                    href="https://www.youtube.com/watch?v=ZQLMz8-KpgU"
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

export default Forearm;
