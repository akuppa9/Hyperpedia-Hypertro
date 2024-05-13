import { Children, useEffect, useState, useRef } from "react";
import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useRoutes,
} from "react-router-dom";
//page imports
import Home from "./pages/Home";
import AboutHyperpedia from "./pages/AboutHyperpedia";
import AboutHypertro from "./pages/AboutHypertro";
import Glossary from "./pages/Glossary";
import WhatIsHypertrophy from "./pages/WhatIsHypertrophy";
import BodyModel from "./pages/BodyModel";
import StructureYourWorkout from "./pages/StructureYourWorkout";
import Chest from "./pages/MuscleDiagramPages/Chest";
import Deltoids from "./pages/MuscleDiagramPages/Deltoids";
import Bicep from "./pages/MuscleDiagramPages/Bicep";
import Forearm from "./pages/MuscleDiagramPages/Forearm";
import UpperAbs from "./pages/MuscleDiagramPages/UpperAbs";
import LowerAbs from "./pages/MuscleDiagramPages/LowerAbs";
import Obliques from "./pages/MuscleDiagramPages/Obliques";
import Quadriceps from "./pages/MuscleDiagramPages/Quadriceps";
import Traps from "./pages/MuscleDiagramPages/TrapsRhomboids";
import Lats from "./pages/MuscleDiagramPages/Lats";
import LowerBack from "./pages/MuscleDiagramPages/LowerBack";
import Tricep from "./pages/MuscleDiagramPages/Tricep";
import Hamstring from "./pages/MuscleDiagramPages/Hamstring";
import Calves from "./pages/MuscleDiagramPages/Calves";
import Sources from "./pages/Sources";

const App: React.FC = () => {
  return (
    <>
      <div className="App">
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-hyperpedia" element={<AboutHyperpedia />} />
              <Route path="/about-hypertro" element={<AboutHypertro />} />
              <Route path="/glossary" element={<Glossary />} />
              <Route path="/structure-a-workout" element={<StructureYourWorkout />} />
              <Route path="/hypertrophy" element={<WhatIsHypertrophy />} />
              <Route path="/body-model" element={<BodyModel />} />
              <Route path="/deltoids" element={<Deltoids />} />
              <Route path="/chest" element={<Chest />} />
              <Route path="/bicep-brachialis" element={<Bicep />} />
              <Route path="/forearm" element={<Forearm />} />
              <Route path="/upperabs" element={<UpperAbs />} />
              <Route path="/lowerabs" element={<LowerAbs />} />
              <Route path="/obliques" element={<Obliques />} />
              <Route path="/quads-adductors" element={<Quadriceps />} />
              <Route path="/traps-rhomboids" element={<Traps />} />
              <Route path="/lats" element={<Lats />} />
              <Route path="/lowerback-glutes" element={<LowerBack />} />
              <Route path="/tricep" element={<Tricep />} />
              <Route path="/hamstring" element={<Hamstring />} />
              <Route path="/calves" element={<Calves />} />
              <Route path="/sources" element={<Sources />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
};

export default App;
