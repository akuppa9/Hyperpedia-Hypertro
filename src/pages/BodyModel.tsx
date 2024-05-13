import React from "react";
import Navbar from "../components/Navbar";
import MuscleDiagram from "../components/MuscleDiagram";
import ChatbotPopup from "../components/ChatbotPopup";
const BodyModel = () => {
  return (
    <>
      <div className="bg-black">
        <Navbar />
        <div className="flex justify-center items-center mt-[15px] md:mx-[30px]">
          <h1 className="text-7xl text-white text-center font-bold">
            Select a Muscle to Explore
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center bg-black">
        <MuscleDiagram />
        <ChatbotPopup />
      </div>
    </>
  );
};

export default BodyModel;
