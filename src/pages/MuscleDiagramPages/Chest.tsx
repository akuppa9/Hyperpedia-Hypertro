import React from "react";
import Navbar from "../../components/Navbar";
import MuscleDiagram from "../../components/MuscleDiagram";
import ChatbotPopup from "../../components/ChatbotPopup";
const Chest = () => {
  return (
    <>
      <div className="bg-black">
        <Navbar />
        <div className="text-white mt-5 ml-16 ">
          <h1 className="text-7xl text-blue-400 font-bold"> Chest </h1>
        </div>
        <div className="text-white mt-12 ml-12 content flex flex-wrap xl:flex-nowrap py-2">
          <img
            loading="lazy"
            src="images/ChestFinal.png"
            className="object-right h-96 w-96 mr-12"
          ></img>
          <p className="text-xl mt-8 xl:mt-0 mr-20">
            The chest, or pectoralis major, is made up of two distinct heads.
            The first is the clavicular fibers, and the second is the
            sternocostal fibers. The sternocostal fibers are sometimes further
            divided into sternal fibers and costal fibers.
            <br></br>
            <br></br>
            The chest fans out from a single insertion point and is the
            second-largest muscle in the upper body. The clavicular fibers
            insert into the top of the humerus and into the medial side of the
            clavicle. The sternocostal fibers originate from the same point in
            the humerus and fan out from the sternum to the costal cartilage of
            the ribs. The different fiber orientations of the heads will heavily
            dictate the biasing motion of an exercise. The function of the
            sternal fibers is to bring the elbows to the midline of the body.
            The function of the clavicular fibers is to bring the elbows to the
            midline at an upward angle. The function of the costal fibers is to
            bring the humerus straight down, as the fibers are almost vertical.
            <br></br>
            <br></br>
            The chest is a very interesting muscle, as it is one of the only
            muscles in the upper body that benefits from stretch-mediated
            hypertrophy. This means that exercises that challenge the chest most
            when the chest is stretched will be more beneficial as the
            length-tension relationship of the chest sarcomeres allows it to
            experience enough meaningful passive tension.
          </p>
        </div>
        <div className="rounded-lg relative overflow-x-auto shadow-md mt-4 bg-black">
          <table className="table-fixed w-10/12 xl:w-11/12 text-sm text-left rtl:text-right text-gray-400 ml-11 mt-6">
            <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-zinc-900">
              <p className="text-blue-400">Chest Exercises</p>
              <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                Here are a few exercises to efficiently grow your chest!
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
                  Incline Smith Press
                </th>
                <td className="px-6 py-4">Smith Machine</td>
                <td className="px-6 py-4">Clavicular Head</td>
                <td className="px-6 py-4">
                  <a
                    className="text-blue-400"
                    href="https://www.youtube.com/watch?v=b8DqTO6ak0k"
                    target="_blank"
                  >
                    <img
                      loading="lazy"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA0UlEQVR4nO1TOQ7CMBB0C8/gFRGdNw1BpOQ/4RmI1gsSLe+hgRcg7SZQGTkogMEmCQoQpIw01axmvIeF6NBqTOa6D8gISBkg6xtpD4qiou5ek4pOUvGsUoBUvLCNLaOdKyDXkA+l5oDp9PqiVTq0tYuRp4OjRE7E1yGRxvlsPSMBJ+1dvER9c37ahUGI2UAibxwB9lx9Ojho9GCte2b2xcU1GgDIsUTaPoY2GaBdXf0mABqi+LeAuPKS331tUH6mn/5oiiJTXNc8XNLId3kd2oEz/hGPJ9Bn8uwAAAAASUVORK5CYII="
                    ></img>
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-zinc-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white"
                >
                  Flat Dumbell Bench Press
                </th>
                <td className="px-6 py-4">Dumbells</td>
                <td className="px-6 py-4">Sternal Head</td>
                <td className="px-6 py-4">
                  <a
                    className="text-blue-400"
                    href="https://www.youtube.com/watch?v=jRUC6IVav30"
                    target="_blank"
                  >
                    <img
                      loading="lazy"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA0UlEQVR4nO1TOQ7CMBB0C8/gFRGdNw1BpOQ/4RmI1gsSLe+hgRcg7SZQGTkogMEmCQoQpIw01axmvIeF6NBqTOa6D8gISBkg6xtpD4qiou5ek4pOUvGsUoBUvLCNLaOdKyDXkA+l5oDp9PqiVTq0tYuRp4OjRE7E1yGRxvlsPSMBJ+1dvER9c37ahUGI2UAibxwB9lx9Ojho9GCte2b2xcU1GgDIsUTaPoY2GaBdXf0mABqi+LeAuPKS331tUH6mn/5oiiJTXNc8XNLId3kd2oEz/hGPJ9Bn8uwAAAAASUVORK5CYII="
                    ></img>
                  </a>
                </td>
              </tr>
              <tr className="bg-white dark:bg-zinc-900">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white"
                >
                  High to Low Cable Fly
                </th>
                <td className="px-6 py-4">Cables</td>
                <td className="px-6 py-4">Costal Head</td>
                <td className="px-6 py-4">
                  <a
                    className="text-blue-400"
                    href="https://www.youtube.com/watch?v=8Um35Es-ROE"
                    target="_blank"
                  >
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

export default Chest;
