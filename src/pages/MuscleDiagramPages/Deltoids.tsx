import React from "react";
import Navbar from "../../components/Navbar";
import MuscleDiagram from "../../components/MuscleDiagram";
import ChatbotPopup from "../../components/ChatbotPopup";
const Deltoids = () => {
  return (
    <>
      <div className="bg-black">
        <Navbar />
        <div className="text-white mt-5 ml-16 ">
          <h1 className="text-7xl text-blue-400 font-bold"> Deltoids </h1>
        </div>
        <div className="text-white mt-12 ml-12 content flex flex-wrap xl:flex-nowrap py-2">
          <img
            loading="lazy"
            src="images/DeltsFinal.png"
            className="object-right h-96 w-96 mr-12"
          ></img>
          <p className="text-xl mt-8 xl:mt-0 mr-20">
            {" "}
            The shoulders, or deltoids, are a three-headed muscle composed of
            the posterior head or the 'rear delt,' the lateral head or the
            'middle delt,' and the anterior head or the 'front delt.' It is also
            the largest muscle by mass in the upper body.
            <br></br>
            <br></br>
            The anterior head originates on the lateral portion of the clavicle.
            The lateral head originates on the acromion process of the scapula.
            The posterior head originates on the spine of the scapula. All of
            these heads insert into the deltoid tuberosity on the humerus.
            <br></br>
            <br></br>
            The overall functions of the three heads are different. The front
            delt has a similar role to the chest in bringing your arm forward.
            The lateral delts' function is to lift the arms out in the scapular
            plane to about shoulder height. The scapular plane is around 140º;
            this is the natural arm path the arm will move due to the position
            of the bone. The rear delts' function is to move your arm back in
            line with your body.
            <br></br>
            <br></br>
            The delts are a unique muscle in which it is very easy to mess up
            the technique.
            <br></br>
            <br></br>
            Front delt - The upper chest has very good leverage below 90º of
            humeral elevation, meaning on a shoulder press you shouldn’t go
            below 90º if you want to strictly isolate your shoulders.
            <br></br>
            <br></br>Middle delt - The middle delt has the best leverage in the
            scapular plane. It also has the best leverage below 90º degrees of
            humeral elevation. As the arm goes past 90º in a raising motion, the
            scapula starts to rotate upwards, which the upper traps and serratus
            are responsible for.
            <br></br>
            <br></br>
            Rear Delt - Once the arm passes the line of the body, the traps and
            rhomboids will play a role.
          </p>
        </div>
        <div className="rounded-lg relative overflow-x-auto shadow-md mt-4 bg-black">
          <table className="table-fixed w-10/12 xl:w-11/12 text-sm text-left rtl:text-right text-gray-400 ml-11 mt-6">
            <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-zinc-900">
              <p className="text-blue-400">Shoulder Exercises</p>
              <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                Here are a few exercises to efficiently grow your shoulders!
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
                  Seated Dumbell Shoulder Press
                </th>
                <td className="px-6 py-4">Dumbells</td>
                <td className="px-6 py-4">Anterior Delt</td>
                <td className="px-6 py-4">
                  <a
                    className="text-blue-400"
                    href="https://www.youtube.com/watch?v=qEwKCR5JCog"
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
              <tr className="bg-white border-b dark:bg-zinc-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white"
                >
                  Cable Lateral Raise
                </th>
                <td className="px-6 py-4">Cables</td>
                <td className="px-6 py-4">Lateral Head</td>
                <td className="px-6 py-4">
                  <a
                    className="text-blue-400"
                    href="https://www.youtube.com/watch?v=Z5FA9aq3L6A"
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
              <tr className="bg-white dark:bg-zinc-900">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white"
                >
                  Rear Delt Fly
                </th>
                <td className="px-6 py-4">Pec Dec Machine</td>
                <td className="px-6 py-4">Posterior Head</td>
                <td className="px-6 py-4">
                  <a
                    className="text-blue-400"
                    href="https://www.youtube.com/watch?v=MOBQn99Z1T4"
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

export default Deltoids;
