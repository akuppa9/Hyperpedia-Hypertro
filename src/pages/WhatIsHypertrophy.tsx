import React from "react";
import Navbar from "../components/Navbar";
import ChatbotPopup from "../components/ChatbotPopup";
const WhatIsHypertrophy = () => {
  return (
    <>
      <div className="bg-black text-center">
        <Navbar />
        <div className="flex justify-center items-center mt-[55px] mx-[30px]">
          <h1 className="text-7xl md:text-8xl text-white font-bold">
            Hypertrophy in-depth
          </h1>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="flex justify-center items-center mx-[30px] mb-[50px]">
          <h3 className="text-4xl text-blue-400 font-bold">
            What is Hypertrophy?
          </h3>
        </div>
        <div className="mx-[90px] md:mx-[200px]">
          <p className="text-l text-white font-bold">
            Hypertrophy can be described as the enlargement of an organ or
            tissue from the increase in size of its cells. In the context of
            bodybuilding, this increase in tissue size would refer to muscle
            fibers in the body. The process of gaining muscle tissue can be done
            with various training methods, however, with the field of exercise
            science rapidly developing, optimal solutions do indeed exist.
          </p>
          <div className="flex items-center justify-center mt-[50px]">
            <img
              src="images/SkeletalMuscle.png"
              className="h-64 w-96"
            ></img>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="flex justify-center items-center mx-[30px] mb-[50px]">
          <h3 className="text-4xl text-blue-400 font-bold">
            How can you achieve Muscular Hypertrophy?
          </h3>
        </div>
        <div className="mx-[90px] md:mx-[200px]">
          <div className="flex items-center justify-center mt-[50px]">
            <img src="images/SCResearch.png" className="h-64 w-96"></img>
          </div>
          <a
            href="https://sandcresearch.medium.com/what-is-training-volume-286b8da6f427"
            className="text-l text-blue-400 font-bold"
            target="_blank"
          >
           Figure 1
          </a>
          <br />
          <br />
          <p className="text-l text-white font-bold">
            There have been several studies comparing muscle growth resulting
            from training to muscular failure (inability to complete another
            repetition) in a high rep range (12-20) versus a low rep range
            (5-8), and the findings regarding hypertrophy have been very
            similar. Based on these findings, when performing a working set with
            the aim of stimulating muscle growth, one should ideally train
            within a lower rep range to muscular failure or 1 RIR, as this
            maximizes stimulus while minimizing fatigue.
          </p>
          <br />
          <br />
          <div className="flex items-center justify-center mt-[50px]">
            <img src="images/ForceVelocity.png" className="h-64 w-96"></img>
          </div>
          <a
            href=" https://baye.com/force-velocity-curve-confusion/"
            className="text-l text-blue-400 font-bold"
            target="_blank"
          >
            Figure 2
          </a>
          <br />
          <br />
          <p className="text-l text-white font-bold">
            When the set reaches approximately 5 reps from muscular failure or
            ~85% of the 1-rep max, regardless of the load used, the involuntary
            muscle contraction slows down, and the force production of the
            fibers reaches a peak. You should try to increase weight while
            staying within the 5-8 rep range as frequently as possible; this is
            known as progressive overload. As seen in Figure 2, if fewer than 5
            reps are completed, the muscle receives less stimulation. Lower reps
            (below 5) are a focus in powerlifting training.
          </p>
          <br />
          <br />
          <div className="flex items-center justify-center mt-[50px]">
            <img src="images/Type12.png" className="h-64 w-96"></img>
          </div>
          <a
            href=" https://www.mdpi.com/1660-4601/18/6/3063"
            className="text-l text-blue-400 font-bold"
            target="_blank"
          >
            Figure 3
          </a>
          <br />
          <br />
          <p className="text-l text-white font-bold">
            Due to Henneman's size principle, when higher force is required, the
            central nervous system (CNS) recruits the higher threshold motor
            units responsible for activating the stronger type IIx fibers, which
            are highly fatigable. Only the final 5 reps to absolute failure
            contribute to muscle building. The recruitment of high-threshold
            motor units allows actin-myosin cross-bridges to generate sufficient
            mechanical tension, stimulating the mechanoreceptors on the muscle
            cell membrane. This, in turn, triggers the molecular signaling
            cascade leading to elevated muscle protein synthesis and an increase
            in the protein content of the muscle fibers.
          </p>
          <br />
          <br />
          <p className="text-l text-white font-bold">
            However, excessive muscle damage caused by either excessive volume
            or high repetitions directs muscle protein synthesis toward muscle
            recovery rather than hypertrophy. Therefore, when working out, it is
            optimal to maximize muscle stimulation and minimize muscle damage,
            which can be achieved through low-volume, high-intensity training.
            This approach also helps minimize CNS fatigue, which, unlike muscle
            damage, is a systemic fatigue mechanism that reduces the efficiency
            of motor unit recruitment in subsequent sets.
          </p>
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className="flex justify-center items-center mx-[30px] mb-[50px]">
          <h3 className="text-4xl text-blue-400 font-bold">
            The Main Takeaway
          </h3>
        </div>
        <div className="mx-[90px] md:mx-[200px]">
          <p className="text-l text-white font-bold">
            In conclusion, it is advisable to perform lower reps (minimum of 5
            reps) with heavier weights until failure, as this minimizes various
            fatigue mechanisms in the body while maintaining a high stimulus.
            Contrary to popular belief, muscle damage resulting in microtears
            does not directly rebuild muscles to be stronger. Instead, it is
            simply a byproduct of excessive stress placed on the muscle.
            Consider the soreness experienced in your legs after running a mile;
            it does not lead to hypertrophy. Hypertrophy occurs when the body
            adapts to a specific stimulus, allowing the myofibrils, which make
            up muscles, to produce excess force and stimulate protein synthesis
            for muscle growth.
          </p>
        </div>
        <br />
        <br />
        <br />
        <div className="flex justify-center items-center mx-[30px] mb-[50px]">
          <h3 className="text-4xl text-blue-400 font-bold">
            Length Tension Relationship
          </h3>
        </div>
        <div className="flex items-center justify-center mt-[50px]">
          <img src="images/LengthTension.png" className="h-64 w-96"></img>
        </div>
        <a
          href="https://www.researchgate.net/figure/Tension-length-relationship-of-a-sarcomere-Netter-medical-illustration-used-with_fig2_23558507"
          className="text-l text-blue-400 font-bold"
          target="_blank"
        >
          Figure 4
        </a>
        <br />
        <br />
        <div className="mx-[90px] md:mx-[200px]">
          <p className="text-l text-white font-bold">
            Muscles are composed of basic contractile units called sarcomeres.
            However, sarcomeres do not exist in a 1:1 relationship with your
            skeletal system. To stimulate muscle growth, muscles experience both
            active tension (force from the sarcomeres' ability to contract) and
            passive tension (stretching force). The red line in the image
            represents the overall tension, and it is observed that as sarcomere
            length increases (then decreases), overall muscle tension follows
            the same pattern. However, there is a dip right before the passive
            force becomes noticeable. Most sarcomeres in the body cannot fully
            expand and experience passive force due to the biomechanics of
            certain joints. Thus, stretch-focused hypertrophy is
            counterproductive, as it excessively fatigues the muscle (due to
            various stretch-ion-related mechanisms). Current research indicates
            that only the chest, calves, glutes, hamstrings, and quads benefit
            from stretch-focused hypertrophy.
          </p>
        </div>
        <br />
        <div className="flex justify-center items-center mx-[250px] mb-[10px]">
          <hr className="w-[50%]"></hr>
          <ChatbotPopup />
        </div>
        <br />
      </div>
    </>
  );
};
export default WhatIsHypertrophy;
