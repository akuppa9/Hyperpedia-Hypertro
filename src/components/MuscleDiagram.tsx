import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import "hyperpedia_trial copy/src/styles.css"; // Import your CSS file

const MuscleDiagram: React.FC = () => {
  // State to keep track of highlighted muscle coordinates
  const [highlightedMuscleCoords, setHighlightedMuscleCoords] = useState<
    string | null
  >(null);

  const navigate = useNavigate();

  // Function to handle mouse over an area
  const handleMouseOver = (
    event: React.MouseEvent<HTMLAreaElement>,
    coords: string
  ) => {
    setHighlightedMuscleCoords(coords);
  };

  // Function to handle mouse out of an area
  const handleMouseOut = () => {
    setHighlightedMuscleCoords(null);
  };

  return (
    <>
      <div className="overflow-x-auto">
        <img
          src="images/diagram.png"
          useMap="#large-image-map"
          className="h-[720px] w-[720px] object-cover hidden md:block"
        ></img>

        <img
          src="images/diagram (1).png"
          useMap="#small-image-map"
          className="md:hidden"
        ></img>

        <map name="large-image-map">
          <area
            target=""
            alt="Deltoids"
            title="Deltoids"
            href=""
            coords="140,155,113,149,96,172,97,187,111,200,122,189,126,168"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "140,155,113,149,96,172,97,187,111,200,122,189,126,168"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "140,155,113,149,96,172,97,187,111,200,122,189,126,168"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/deltoids");
            }}
          ></area>
          <area
            target=""
            alt="Deltoids"
            title="Deltoids"
            href=""
            coords="235,167,241,187,253,200,269,185,268,171,259,158,240,148,224,156"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "235,167,241,187,253,200,269,185,268,171,259,158,240,148,224,156"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "235,167,241,187,253,200,269,185,268,171,259,158,240,148,224,156"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/deltoids");
            }}
          ></area>
          <area
            target=""
            alt="Chest"
            title="Chest"
            href=""
            coords="212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/chest");
            }}
          ></area>
          <area
            target=""
            alt="Biceps/Brachialis"
            title="Biceps/Brachialis"
            href=""
            coords="97,200,89,221,90,247,104,245,111,225,113,202"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "140,155,113,149,96,172,97,187,111,200,122,189,126,168"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "140,155,113,149,96,172,97,187,111,200,122,189,126,168"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/bicep-brachialis");
            }}
          ></area>
          <area
            target=""
            alt="Biceps/Brachialis"
            title="Biceps/Brachialis"
            href=""
            coords="267,206,273,223,271,249,260,244,249,225,249,201,261,199"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/bicep-brachialis");
            }}
          ></area>
          <area
            target=""
            alt="Forearms"
            title="Forearms"
            href=""
            coords="87,247,108,268,76,347,58,336,72,269"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/forearm");
            }}
          ></area>
          <area
            target=""
            alt="Forearms"
            title="Forearms"
            href=""
            coords="266,252,282,247,306,338,285,343,271,309,252,265"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/forearm");
            }}
          ></area>
          <area
            target=""
            alt="Upper Abs"
            title="Upper Abs"
            href=""
            coords="151,223,182,211,212,223,210,287,155,287"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/upperabs");
            }}
          ></area>
          <area
            target=""
            alt="Lower Abs"
            title="Lower Abs"
            href=""
            coords="155,291,210,290,201,344,181,360,162,344"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/lowerabs");
            }}
          ></area>
          <area
            target=""
            alt="Obliques"
            title="Obliques"
            href=""
            coords="126,208,132,309,156,332,149,220,139,213"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/obliques");
            }}
          ></area>
          <area
            target=""
            alt="Obliques"
            title="Obliques"
            href=""
            coords="238,209,232,310,209,330,214,222,224,212"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/obliques");
            }}
          ></area>
          <area
            target=""
            alt="Quadriceps/Adductors"
            title="Quadriceps/Adductors"
            href=""
            coords="116,384,128,468,163,468,179,371,160,341,131,315"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/quads-adductors");
            }}
          ></area>
          <area
            target=""
            alt="Quadriceps/Adductors"
            title="Quadriceps/Adductors"
            href=""
            coords="210,329,184,369,200,475,233,467,251,390,232,315"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/quads-adductors");
            }}
          ></area>
          <area
            target=""
            alt="Upper Trapezius"
            title="Upper Trapezius"
            href=""
            coords="552,109,555,131,572,145,508,145,523,133,526,109,537,109"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/traps-rhomboids");
            }}
          ></area>
          <area
            target=""
            alt="Mid/Lower Trapezius/ Rhomboid"
            title="Mid/Lower Trapezius/ Rhomboid"
            href=""
            coords="541,148,583,149,561,203,540,241,518,203,499,149"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/traps-rhomboids");
            }}
          ></area>
          <area
            target=""
            alt="Lats/ Teres Major"
            title="Lats/ Teres Major"
            href=""
            coords="500,156,473,174,476,204,493,280,506,294,532,233"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/lats");
            }}
          ></area>
          <area
            target=""
            alt="Lats/ Teres Major"
            title="Lats/ Teres Major"
            href=""
            coords="579,158,603,172,584,275,570,295,548,232"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/lats");
            }}
          ></area>
          <area
            target=""
            alt="Lower Back"
            title="Lower Back"
            href=""
            coords="530,240,550,241,570,302,541,321,505,301,517,272"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/lowerback-glutes");
            }}
          ></area>
          <area
            target=""
            alt="Tricep"
            title="Tricep"
            href=""
            coords="470,192,454,206,444,254,460,269,480,221"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/tricep");
            }}
          ></area>
          <area
            target=""
            alt="Tricep"
            title="Tricep"
            href=""
            coords="603,186,598,223,617,268,637,253,630,216,619,198"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/tricep");
            }}
          ></area>
          <area
            target=""
            alt="Glutes"
            title="Glutes"
            href=""
            coords="573,303,594,326,595,357,577,383,538,387,499,383,479,343,487,314,506,303,540,322"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/lowerback-glutes");
            }}
          ></area>
          <area
            target=""
            alt="Hamstring"
            title="Hamstring"
            href=""
            coords="499,386,535,388,518,496,483,489,476,432,478,348"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/hamstring");
            }}
          ></area>
          <area
            target=""
            alt="Hamstring"
            title="Hamstring"
            href=""
            coords="570,389,543,389,562,496,594,489,599,356"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/hamstring");
            }}
          ></area>
          <area
            target=""
            alt="Calves"
            title="Calves"
            href=""
            coords="485,489,517,496,520,532,517,575,485,575,479,538"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/calves");
            }}
          ></area>
          <area
            target=""
            alt="Calves"
            title="Calves"
            href=""
            coords="564,496,595,490,598,576,562,578,557,534"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "212,219,181,208,158,217,133,214,127,182,134,160,180,161,216,157,233,169,235,203"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/calves");
            }}
          ></area>
        </map>

        <map name="small-image-map">
          <area
            target=""
            alt="Chest"
            title="Chest"
            href=""
            coords="84,113,95,106,111,106,119,107,128,106,138,106,145,106,154,112,156,121,157,131,154,137,148,143,141,145,134,145,125,139,115,139,104,145,94,145,86,141,83,136,82,130,81,122,86,141,83,136"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "84,113,95,106,111,106,119,107,128,106,138,106,145,106,154,112,156,121,157,131,154,137,148,143,141,145,134,145,125,139,115,139,104,145,94,145,86,141,83,136,82,130,81,122,86,141,83,136"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "84,113,95,106,111,106,119,107,128,106,138,106,145,106,154,112,156,121,157,131,154,137,148,143,141,145,134,145,125,139,115,139,104,145,94,145,86,141,83,136,82,130,81,122,86,141,83,136"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/chest");
            }}
          ></area>
          <area
            target=""
            alt="Deltoids"
            title="Deltoids"
            href=""
            coords="91,103,78,99,68,107,63,120,68,130,78,131,82,119"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "91,103,78,99,68,107,63,120,68,130,78,131,82,119"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "91,103,78,99,68,107,63,120,68,130,78,131,82,119"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/deltoids");
            }}
          ></area>
          <area
            target=""
            alt="Deltoids"
            title="Deltoids"
            href=""
            coords="148,105,157,100,167,102,173,108,177,115,176,122,173,129,167,132,159,125,158,112"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "148,105,157,100,167,102,173,108,177,115,176,122,173,129,167,132,159,125,158,112"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "148,105,157,100,167,102,173,108,177,115,176,122,173,129,167,132,159,125,158,112"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/deltoids");
            }}
          ></area>
          <area
            target=""
            alt="Biceps"
            title="Biceps"
            href=""
            coords="71,133,75,142,68,161,61,163,60,155,61,147,64,140"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "71,133,75,142,68,161,61,163,60,155,61,147,64,140"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "71,133,75,142,68,161,61,163,60,155,61,147,64,140"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/bicep-brachialis");
            }}
          ></area>
          <area
            target=""
            alt="Biceps"
            title="Biceps"
            href=""
            coords="171,135,176,140,179,145,181,152,181,163,175,161,171,156,168,150,168,142"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "171,135,176,140,179,145,181,152,181,163,175,161,171,156,168,150,168,142"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "171,135,176,140,179,145,181,152,181,163,175,161,171,156,168,150,168,142"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/bicep-brachialis");
            }}
          ></area>
          <area
            target=""
            alt="Upper Abs"
            title="Upper Abs"
            href=""
            coords="120,140,102,149,103,191,139,191,140,149"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(e, "120,140,102,149,103,191,139,191,140,149")
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "120,140,102,149,103,191,139,191,140,149"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/upperabs");
            }}
          ></area>
          <area
            target=""
            alt="Lower Abs"
            title="Lower Abs"
            href=""
            coords="103,194,108,229,121,240,134,229,139,193"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(e, "103,194,108,229,121,240,134,229,139,193")
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "103,194,108,229,121,240,134,229,139,193"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/lowerabs");
            }}
          ></area>
          <area
            target=""
            alt="Forearms"
            title="Forearms"
            href=""
            coords="58,166,71,181,50,228,40,227,48,179"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(e, "58,166,71,181,50,228,40,227,48,179")
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords === "58,166,71,181,50,228,40,227,48,179"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/forearm");
            }}
          ></area>
          <area
            target=""
            alt="Forearms"
            title="Forearms"
            href=""
            coords="182,166,170,181,191,228,202,226,192,178"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(e, "182,166,170,181,191,228,202,226,192,178")
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "182,166,170,181,191,228,202,226,192,178"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/forearm");
            }}
          ></area>
          <area
            target=""
            alt="Quads"
            title="Quads"
            href=""
            coords="79,238,78,274,87,312,109,314,119,266,112,240,107,231,103,223,92,212,87,221"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "79,238,78,274,87,312,109,314,119,266,112,240,107,231,103,223,92,212,87,221"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "79,238,78,274,87,312,109,314,119,266,112,240,107,231,103,223,92,212,87,221"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/quads-adductors");
            }}
          ></area>
          <area
            target=""
            alt="Quads"
            title="Quads"
            href=""
            coords="149,215,159,220,163,242,164,261,162,276,162,286,158,301,152,312,144,312,137,314,132,308,130,292,126,276,125,263,125,254,129,244,132,234,141,222"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "149,215,159,220,163,242,164,261,162,276,162,286,158,301,152,312,144,312,137,314,132,308,130,292,126,276,125,263,125,254,129,244,132,234,141,222"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "149,215,159,220,163,242,164,261,162,276,162,286,158,301,152,312,144,312,137,314,132,308,130,292,126,276,125,263,125,254,129,244,132,234,141,222"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/quads-adductors");
            }}
          ></area>
          <area
            target=""
            alt="Traps"
            title="Traps"
            href=""
            coords="334,99,386,99,375,134,359,161,344,135"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(e, "334,99,386,99,375,134,359,161,344,135")
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "334,99,386,99,375,134,359,161,344,135"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/traps-rhomboids");
            }}
          ></area>
          <area
            target=""
            alt="Triceps"
            title="Triceps"
            href=""
            coords="315,128,307,133,302,145,299,153,298,165,299,172,304,177,310,173,313,165,317,157,318,148,318,140"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "315,128,307,133,302,145,299,153,298,165,299,172,304,177,310,173,313,165,317,157,318,148,318,140"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "315,128,307,133,302,145,299,153,298,165,299,172,304,177,310,173,313,165,317,157,318,148,318,140"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/tricep");
            }}
          ></area>
          <area
            target=""
            alt="Triceps"
            title="Triceps"
            href=""
            coords="404,128,411,132,415,136,418,142,421,152,421,161,421,169,413,178,408,170,405,161,401,154,399,147,401,137"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "404,128,411,132,415,136,418,142,421,152,421,161,421,169,413,178,408,170,405,161,401,154,399,147,401,137"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "404,128,411,132,415,136,418,142,421,152,421,161,421,169,413,178,408,170,405,161,401,154,399,147,401,137"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/tricep");
            }}
          ></area>
          <area
            target=""
            alt="Lats"
            title="Lats"
            href=""
            coords="334,107,326,109,319,113,317,119,317,127,319,137,323,147,326,159,328,172,331,183,336,191,341,186,344,179,346,173,348,166,352,158,352,152"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "334,107,326,109,319,113,317,119,317,127,319,137,323,147,326,159,328,172,331,183,336,191,341,186,344,179,346,173,348,166,352,158,352,152"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "334,107,326,109,319,113,317,119,317,127,319,137,323,147,326,159,328,172,331,183,336,191,341,186,344,179,346,173,348,166,352,158,352,152"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/lats");
            }}
          ></area>
          <area
            target=""
            alt="Lats"
            title="Lats"
            href=""
            coords="385,108,400,113,402,121,400,131,398,139,395,149,393,159,391,168,388,181,387,187,382,192,377,185,374,176,370,166,368,159,369,149"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "385,108,400,113,402,121,400,131,398,139,395,149,393,159,391,168,388,181,387,187,382,192,377,185,374,176,370,166,368,159,369,149"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "385,108,400,113,402,121,400,131,398,139,395,149,393,159,391,168,388,181,387,187,382,192,377,185,374,176,370,166,368,159,369,149"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/lats");
            }}
          ></area>
          <area
            target=""
            alt="Lower Back"
            title="Lower Back"
            href=""
            coords="366,160,374,181,381,201,364,211,353,211,338,200,346,179,353,160"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "366,160,374,181,381,201,364,211,353,211,338,200,346,179,353,160"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "366,160,374,181,381,201,364,211,353,211,338,200,346,179,353,160"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/lowerback-glutes");
            }}
          ></area>
          <area
            target=""
            alt="Glutes"
            title="Glutes"
            href=""
            coords="328,211,326,219,324,228,325,237,328,245,333,253,340,255,346,257,353,257,355,249,362,248,364,254,371,258,381,255,389,249,393,241,395,232,395,223,392,214,386,206,377,205,370,209,360,214,353,213,348,209,342,207,335,205"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "328,211,326,219,324,228,325,237,328,245,333,253,340,255,346,257,353,257,355,249,362,248,364,254,371,258,381,255,389,249,393,241,395,232,395,223,392,214,386,206,377,205,370,209,360,214,353,213,348,209,342,207,335,205"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "328,211,326,219,324,228,325,237,328,245,333,253,340,255,346,257,353,257,355,249,362,248,364,254,371,258,381,255,389,249,393,241,395,232,395,223,392,214,386,206,377,205,370,209,360,214,353,213,348,209,342,207,335,205"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/lowerback-glutes");
            }}
          ></area>
          <area
            target=""
            alt="Hamstrings"
            title="Hamstrings"
            href=""
            coords="336,255,355,261,343,335,334,324,323,333,318,245"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "336,255,355,261,343,335,334,324,323,333,318,245"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "336,255,355,261,343,335,334,324,323,333,318,245"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/hamstring");
            }}
          ></area>
          <area
            target=""
            alt="Hamstrings"
            title="Hamstrings"
            href=""
            coords="401,244,396,299,396,331,385,322,376,332,367,287,362,258,380,261,390,250"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "401,244,396,299,396,331,385,322,376,332,367,287,362,258,380,261,390,250"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "401,244,396,299,396,331,385,322,376,332,367,287,362,258,380,261,390,250"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/hamstring");
            }}
          ></area>
          <area
            target=""
            alt="Calves"
            title="Calves"
            href=""
            coords="334,326,324,334,322,345,321,359,321,371,326,382,332,381,338,382,344,377,345,371,345,362,346,354,346,348,343,341,342,334"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "334,326,324,334,322,345,321,359,321,371,326,382,332,381,338,382,344,377,345,371,345,362,346,354,346,348,343,341,342,334"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "334,326,324,334,322,345,321,359,321,371,326,382,332,381,338,382,344,377,345,371,345,362,346,354,346,348,343,341,342,334"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/calves");
            }}
          ></area>
          <area
            target=""
            alt="Calves"
            title="Calves"
            href=""
            coords="385,325,379,333,376,340,374,347,373,353,372,361,372,369,375,376,379,380,386,381,393,381,396,375,397,367,397,358,398,349,397,339,391,330"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "385,325,379,333,376,340,374,347,373,353,372,361,372,369,375,376,379,380,386,381,393,381,396,375,397,367,397,358,398,349,397,339,391,330"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "385,325,379,333,376,340,374,347,373,353,372,361,372,369,375,376,379,380,386,381,393,381,396,375,397,367,397,358,398,349,397,339,391,330"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/calves");
            }}
          ></area>
          <area
            target=""
            alt="Traps"
            title="Traps"
            href=""
            coords="350,74,367,73,370,89,375,93,380,97,369,96,362,97,353,97,339,97,349,87"
            shape="poly"
            onMouseOver={(e: React.MouseEvent<any>) =>
              handleMouseOver(
                e,
                "350,74,367,73,370,89,375,93,380,97,369,96,362,97,353,97,339,97,349,87"
              )
            }
            onMouseOut={handleMouseOut}
            style={{
              outline:
                highlightedMuscleCoords ===
                "350,74,367,73,370,89,375,93,380,97,369,96,362,97,353,97,339,97,349,87"
                  ? "2px solid #FFD700"
                  : "none",
            }}
            onClick={() => {
              navigate("/traps-rhomboids");
            }}
          ></area>
        </map>
      </div>
    </>
  );
};

export default MuscleDiagram;
