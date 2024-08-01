import React, { Suspense, lazy } from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const AboutHyperpedia = lazy(() => import("./pages/AboutHyperpedia"));
const AboutHypertro = lazy(() => import("./pages/AboutHypertro"));
const Glossary = lazy(() => import("./pages/Glossary"));
const WhatIsHypertrophy = lazy(() => import("./pages/WhatIsHypertrophy"));
const BodyModel = lazy(() => import("./pages/BodyModel"));
const StructureYourWorkout = lazy(() => import("./pages/StructureYourWorkout"));
const Chest = lazy(() => import("./pages/MuscleDiagramPages/Chest"));
const Deltoids = lazy(() => import("./pages/MuscleDiagramPages/Deltoids"));
const Bicep = lazy(() => import("./pages/MuscleDiagramPages/Bicep"));
const Forearm = lazy(() => import("./pages/MuscleDiagramPages/Forearm"));
const UpperAbs = lazy(() => import("./pages/MuscleDiagramPages/UpperAbs"));
const LowerAbs = lazy(() => import("./pages/MuscleDiagramPages/LowerAbs"));
const Obliques = lazy(() => import("./pages/MuscleDiagramPages/Obliques"));
const Quadriceps = lazy(() => import("./pages/MuscleDiagramPages/Quadriceps"));
const Traps = lazy(() => import("./pages/MuscleDiagramPages/TrapsRhomboids"));
const Lats = lazy(() => import("./pages/MuscleDiagramPages/Lats"));
const LowerBack = lazy(() => import("./pages/MuscleDiagramPages/LowerBack"));
const Tricep = lazy(() => import("./pages/MuscleDiagramPages/Tricep"));
const Hamstring = lazy(() => import("./pages/MuscleDiagramPages/Hamstring"));
const Calves = lazy(() => import("./pages/MuscleDiagramPages/Calves"));
const Sources = lazy(() => import("./pages/Sources"));

const App: React.FC = () => {
  return (
    <>
      <div className="App">
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
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
          </Suspense>
        </Router>
      </div>
    </>
  );
};

export default App;
