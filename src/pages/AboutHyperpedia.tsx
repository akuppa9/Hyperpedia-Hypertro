import React from "react";
import Navbar from "../components/Navbar";
import ChatbotPopup from "../components/ChatbotPopup";
import { useNavigate } from "react-router-dom";
const AboutHyperpedia = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-black text-center">
        <div>
          <Navbar />
          <div className="flex justify-center items-center mt-[55px] mx-[10px] md:mx-[30px]">
            <h1 className="text-6xl md:text-8xl text-white font-bold">
              Unlock your Dream Physique
            </h1>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="flex justify-center items-center mx-[10px] md:mx-[30px] mb-[50px]">
          <h3 className="text-4xl text-blue-400 font-bold">
            About the Hyperpedia
          </h3>
        </div>
        <div className="mx-[90px] md:mx-[200px]">
          <p className="text-l text-white font-bold">
            The Hyperpedia is a comprehensive online encyclopedia dedicated to
            providing accurate, evidence-based information about hypertrophy and
            muscle development. Our mission is to combat the widespread
            misinformation that plagues the fitness industry by empowering
            individuals with eivdence-based knowledge to optimize their training
            and achieve their fitness goals effectively.
          </p>
        </div>
        <br />
        <br />
        <br />
        <div className="flex justify-center items-center mx-[10px] md:mx-[30px] mb-[50px]">
          <h3 className="text-4xl text-blue-400 font-bold">Purpose</h3>
        </div>
        <br />
        <div className="grid grid-cols-3 grid-rows-1 gap-4 mb-11">
          <div>
            <div className="flex justify-center items-center mx-[10px] md:mx-[30px] mb-[50px]">
              <h3 className="text-2xl text-blue-400 font-bold">
                Combatting Misinformation
              </h3>
            </div>
            <div className="flex justify-center items-center mb-[50px]">
              <p className="text-l text-white font-bold mx-[10px] md:mx-[30px]">
                In the world of fitness, misinformation runs rampant, making it
                challenging for individuals to separate fact from fiction. The
                Hyperpedia aims to be a trusted resource that cuts through the
                noise and provides scientifically-backed information on
                hypertrophy. We strive to debunk common myths and misconceptions
                surrounding muscle growth and deliver reliable content based on
                the latest research in exercise science.
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center mx-[10px] md:mx-[30px] mb-[50px]">
              <h3 className="text-2xl text-blue-400 font-bold">
                Educating and Empowering
              </h3>
            </div>
            <div className="flex justify-center items-center mb-[50px]">
              <p className="text-l text-white font-bold mx-[10px] md:mx-[30px]">
                We believe that knowledge is power, especially when it comes to
                fitness. Our goal is to empower individuals by equipping them
                with accurate information about hypertrophy. Whether you're a
                beginner or an experienced lifter, the Hyperpedia provides
                comprehensive resources to help you understand the science
                behind muscle growth, training principles, and effective
                strategies to achieve your desired results.
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center mx-[10px] md:mx-[30px] mb-[50px]">
              <h3 className="text-2xl text-blue-400 font-bold">
                Evidence-based Practices
              </h3>
            </div>
            <div className="flex justify-center items-center mb-[50px]">
              <p className="text-l text-white font-bold mx-[10px] md:mx-[30px]">
                The Hyperpedia is rooted in science. We meticulously curate our
                content by reviewing and analyzing the latest studies in the
                field of exercise science. Our information is sourced from
                reputable scientific journals, peer-reviewed research, and
                expert consensus to ensure that the information we provide is
                reliable, up-to-date, and backed by scientific evidence.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mx-[10px] md:mx-[30px] mb-[50px]">
          <h3 className="text-4xl text-blue-400 font-bold">Key Features</h3>
        </div>
        <br />
        <div className="grid grid-cols-2 grid-rows-1 gap-4 mb-11">
          <div>
            <div className="flex justify-center items-center mx-[10px] md:mx-[30px] mb-[50px]">
              <h3 className="text-2xl text-blue-400 font-bold">
                Up-to-date Information
              </h3>
            </div>
            <div className="flex justify-center items-center mb-[50px]">
              <p className="text-l text-white font-bold mx-[10px] md:mx-[30px]">
                We pride ourselves on providing information that is backed by
                the latest research and studies in the field of exercise
                science. All information in the Hyperpedia is derived from
                credible and publicly available meta-analyses and controlled
                trials conducted by experts within the field. By staying
                up-to-date with the evolving research, we strive to offer you
                the most accurate and reliable information available.
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center mx-[10px] md:mx-[30px] mb-[50px]">
              <h3 className="text-2xl text-blue-400 font-bold">
                User-friendly Interface
              </h3>
            </div>
            <div className="flex justify-center items-center mb-[50px]">
              <p className="text-l text-white font-bold mx-[10px] md:mx-[30px]">
                The Hyperpedia features a user-friendly interface designed to
                enhance your browsing experience. Our intuitive navigation
                allows you to easily explore different muscle groups and
                divisions. The information is presented in a clear and concise
                manner, making it accessible to individuals with varying levels
                of fitness knowledge.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mx-[90px] md:mx-[250px] mb-[50px]">
          <p className="text-l text-white font-bold">
            Join us in the pursuit of accurate fitness information and embark on
            a journey towards maximizing your muscle growth potential. The
            Hyperpedia is your go-to resource for evidence-based knowledge,
            enabling you to make informed decisions about your training regimen
            and optimize your hypertrophy goals.
            <br />
            <br />
            Note: The Hyperpedia should always be used as a supplementary
            resource, and we encourage you to consult with qualified fitness
            professionals or healthcare providers for personalized advice and
            guidance specific to your individual needs and circumstances.
          </p>
        </div>
        <br />
        <br />
        <br />
        <div className="flex justify-center items-center mb-[50px]">
          <h3 className="text-4xl text-blue-400 font-bold">Sources</h3>
        </div>
        <div className="flex justify-center items-center mx-[90px] md:mx-[250px] mb-[50px]">
          <p className="text-l text-white font-bold">
            To view the various research publications, articles, and meta
            analyses that we source our information from, be sure to view the{" "}
            <a
              onClick={() => {
                navigate("/sources");
              }}
              className="text-blue-400"
            >
              sources
            </a>{" "}
            page.
          </p>
        </div>
        <div className="flex justify-center items-center mx-[90px] md:mx-[250px] mb-[10px]">
          <hr className="w-[50%]"></hr>
          <ChatbotPopup />
        </div>
        <br />
      </div>
    </>
  );
};
export default AboutHyperpedia;
