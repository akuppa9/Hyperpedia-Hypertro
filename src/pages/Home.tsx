import { useState } from "react";
import "../index.css";
//component imports
import Navbar from "../components/Navbar";
import MainTitle from "../components/MainTitle";
import ChatbotPopup from "../components/ChatbotPopup";
const Home: React.FC = () => {
  //const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-black h-screen">
        <Navbar />
        <MainTitle />
        <ChatbotPopup />
      </div>
    </>
  );
};
export default Home;
