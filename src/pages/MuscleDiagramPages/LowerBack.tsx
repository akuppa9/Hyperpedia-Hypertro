import React from "react";
import Navbar from "../../components/Navbar";
import MuscleDiagram from "../../components/MuscleDiagram";
import ChatbotPopup from "../../components/ChatbotPopup";
const Erector = () => {
  return (
    <>
      <div className="bg-black">
        <Navbar />
        <div className="text-white mt-5 ml-12 ">
          <h1 className="text-7xl text-blue-400 font-bold">
            {" "}
            Lower Back and Glutes{" "}
          </h1>
        </div>
        <div className="text-white mt-12 ml-12 content flex flex-wrap xl:flex-nowrap py-2">
          <img
            src="images/ErectorFinal.png"
            className="object-right h-96 w-96 mr-12"
          ></img>
          <p className="text-xl mt-8 xl:mt-0 mr-20">
            The “lower back” is a component of a group of muscles known as the
            erector spinae, which stretches from the skull down to the hip. It
            consists of muscles such as the iliocostalis lumborum and the
            longissimus thoracis. Though this muscle group is often not
            prioritized in bodybuilding, it adds thickness to the back as well
            as improves functionality.
            <br></br>
            <br></br>
            The primary role of the erectors is to extend the spine, and it is
            essential to train them to avoid muscle imbalances and spine
            stability issues. They share a similar role in stabilizing the spine
            with other core muscles, such as the glutes and abdominals.
            <br></br>
            <br></br>
            Training the lower back effectively is fairly straightforward. Any
            movement that involves spinal extension will train the erectors
            sufficiently. It is important to avoid heavy loading that can create
            pressure on the vertebral discs.
          </p>
        </div>
        <div className="text-white mt-12 ml-12 content bg-black flex flex-wrap xl:flex-nowrap py-2">
          <img
            src="images/GlutesFinal.png"
            className="object-right h-96 w-96 mr-[53px]"
          ></img>
          <p className="text-xl mt-8 xl:mt-0 mr-20">
            The glutes are a group of muscles consisting of the gluteus minimus,
            gluteus maximus, gluteus medius, and various other smaller muscles.
            <br></br>
            <br></br>
            The gluteus maximus originates from the gluteal (posterior) surface
            of the ilium, sacrum, and coccyx. The gluteus medius originates from
            the gluteal surface of the ilium and inserts into the lateral
            surface of the greater trochanter. The gluteus minimus originates
            from the ilium and converges to form a tendon, inserting on the
            anterior side of the greater trochanter.
            <br></br>
            <br></br>
            The glutes are also part of the core and share a similar function of
            spinal stabilization but also have other functions, such as hip
            extension and hip abduction. Research has shown that the glutes are
            one of the few muscles in the body that benefit from
            stretch-mediated hypertrophy, meaning that exercises that put the
            glutes in a lengthened position can be more beneficial for growth
            than others.
          </p>
        </div>
        <div className="rounded-lg relative overflow-x-auto shadow-md mt-4 bg-black">
          <table className="table-fixed w-10/12 xl:w-11/12 text-sm text-left rtl:text-right text-gray-400 ml-11 mt-6">
            <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-zinc-900">
              <p className="text-blue-400">Lower Back and Glute Exercises</p>
              <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                Here are a few exercises to efficiently grow your lower back and
                glutes!
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
                  Hyperextension
                </th>
                <td className="px-6 py-4">Roman Chair</td>
                <td className="px-6 py-4">Lower Back</td>
                <td className="px-6 py-4">
                  <a
                    className="text-blue-400"
                    href="https://www.youtube.com/watch?v=ph3pddpKzzw"
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
                  Romanian Deadlift
                </th>
                <td className="px-6 py-4">Dumbells or Barbell</td>
                <td className="px-6 py-4">
                  Lower Back and Glutes (Lengthened Position)
                </td>
                <td className="px-6 py-4">
                  <a
                    className="text-blue-400"
                    href="https://www.youtube.com/shorts/5rIqP63yWFg"
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
                  Hip Thrust
                </th>
                <td className="px-6 py-4">Barbell</td>
                <td className="px-6 py-4">Glutes (Shortened Position)</td>
                <td className="px-6 py-4">
                  <a
                    className="text-blue-400"
                    href="https://www.youtube.com/shorts/W86oVlnLqY4"
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
                  Hip Abduction
                </th>
                <td className="px-6 py-4">Abduction Machine</td>
                <td className="px-6 py-4">Gluteus Minimus</td>
                <td className="px-6 py-4">
                  <a
                    className="text-blue-400"
                    href="https://www.youtube.com/watch?v=dL92FqMJqVY"
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

export default Erector;
