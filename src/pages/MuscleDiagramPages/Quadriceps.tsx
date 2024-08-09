import React from "react";
import Navbar from "../../components/Navbar";
import MuscleDiagram from "../../components/MuscleDiagram";
import ChatbotPopup from "../../components/ChatbotPopup";
const Quadriceps = () => {
  return (
    <>
      <div className="bg-black">
        <Navbar />
        <div className="text-white mt-5 ml-12 ">
          <h1 className="text-7xl text-blue-400 font-bold">
            {" "}
            Quadriceps and Adductors{" "}
          </h1>
        </div>
        <div className="text-white mt-12 ml-12 content flex flex-wrap xl:flex-nowrap py-2">
          <img
            loading="lazy"
            src="images/QuadsFinal.png"
            className="object-right h-96 w-96 mr-12"
          ></img>
          <p className="text-xl mt-8 xl:mt-0 mr-20">
            {" "}
            The quadriceps, or quads, are actually a group of four muscles: the
            vastus medialis, vastus intermedius, vastus lateralis, and rectus
            femoris.
            <br></br>
            <br></br>
            The vastus muscles originate from the top of the femur and insert
            into the tibial tuberosity, while the rectus femoris originates from
            the ilium and also inserts into the tibial tuberosity.
            <br></br>
            <br></br>
            The quad's main function is to extend the knee; however, since the
            rectus femoris inserts at the hip, this muscle also plays a role in
            hip flexion. As the rectus femoris is a biarticular muscle, it tends
            to suffer from antagonist inhibition during motions like hack
            squats, thus often ending up underdeveloped. Research has shown that
            the quads are one of the few muscles in the body that benefit from
            stretch-mediated hypertrophy, meaning that exercises putting the
            quads in a lengthened position can be more beneficial for growth
            than others.
          </p>
        </div>
        <div className="text-white mt-12 ml-12 content bg-black flex flex-wrap xl:flex-nowrap py-2">
          <img
            loading="lazy"
            src="images/BrachialisFinal.png"
            className="object-right h-96 w-96 mr-[25px]"
          ></img>
          <p className="text-xl mt-8 xl:mt-0 mr-20">
            The adductors are composed of the adductor magnus, adductor brevis,
            adductor longus, and the gracilis muscles.
            <br></br>
            <br></br>
            The adductors are a group of muscles located medially between the
            quads and hamstrings, in the inner thigh. These muscles originate in
            the pelvis and extend to the femur, with the gracilis extending to
            the proximal medial tibia. These muscles are often neglected, and
            most people see quick results when training these underdeveloped
            muscles.
            <br></br>
            <br></br>
            The adductor magnus has the best leverage at high degrees of hip
            flexion; however, the rest of the adductors have better leverage in
            hip adduction.
            <br></br>
          </p>
        </div>
        <div className="rounded-lg relative overflow-x-auto shadow-md mt-4 bg-black">
          <table className="table-fixed w-10/12 xl:w-11/12 text-sm text-left rtl:text-right text-gray-400 ml-11 mt-6">
            <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-zinc-900">
              <p className="text-blue-400">Quadricep and Adductor Exercises</p>
              <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                Here are a few exercises to efficiently grow your quads and
                adductors!
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
                  Hack Squat
                </th>
                <td className="px-6 py-4">Hack Squat Machine</td>
                <td className="px-6 py-4">Quads (lengthened position)</td>
                <td className="px-6 py-4">
                  <a
                    className="text-blue-400"
                    href="https://www.youtube.com/watch?v=0tn5K9NlCfo"
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
              <tr className="bg-white border-b dark:bg-zinc-900  dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white"
                >
                  Leg Press
                </th>
                <td className="px-6 py-4">Leg Press Machine</td>
                <td className="px-6 py-4">Quads (mid position)</td>
                <td className="px-6 py-4">
                  <a
                    className="text-blue-400"
                    href="https://www.youtube.com/watch?v=yZmx_Ac3880"
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
                  Leg Extensions
                </th>
                <td className="px-6 py-4">Leg Extension Machine</td>
                <td className="px-6 py-4">Quads (shortened position)</td>
                <td className="px-6 py-4">
                  <a
                    className="text-blue-400"
                    href="https://www.youtube.com/watch?v=m0FOpMEgero"
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
                  Hip Adduction
                </th>
                <td className="px-6 py-4">Adduction Machine</td>
                <td className="px-6 py-4">Adductors</td>
                <td className="px-6 py-4">
                  <a
                    className="text-blue-400"
                    href="https://www.youtube.com/watch?v=GmRSV_n2E_0"
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
                  Sissy Squats
                </th>
                <td className="px-6 py-4">Stable Arm Support</td>
                <td className="px-6 py-4">Rectus Femoris</td>
                <td className="px-6 py-4">
                  <a
                    className="text-blue-400"
                    href="https://www.youtube.com/watch?v=VUiFlZ2FsKA"
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

export default Quadriceps;
