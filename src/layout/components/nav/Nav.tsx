import React, { useState } from "react";

const notSelectedColor = "white";
const selectedColor = "black";
const selectedColorBg = " bg-white ";
const notSelectedColorBg = " bg-zinc-900 ";
function Nav() {
  const [logoColor, setLogoColor] = useState<number>(1);
  const selectedELement = (index: number): void => {
    setLogoColor(index);
  }
  return (
    <div className="w-16 h-screen bg-zinc-900 fixed z-40 flex flex-col justify-center items-center">
      {/* -------home图标------ */}
      <div
        className={`w-14 h-14 flex justify-center items-center  ml-2 rounded-l-3xl +${logoColor == 1 ? selectedColorBg : notSelectedColorBg}`}
        onClick={() => selectedELement(1)}
      >
        <div className="w-10 h-10 my-4 ">
          <svg
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4520"
            width="100%"
            height="100%"
          >
            <path
              d="M902.826667 377.813333l-119.68 119.68a96.704 96.704 0 0 1-136.746667 0l-119.68-119.68a96.704 96.704 0 0 1 0-136.746666l119.68-119.68a96.704 96.704 0 0 1 136.746667 0l119.68 119.68a96.704 96.704 0 0 1 0 136.746666zM372.693333 490.666667H203.306667C149.973333 490.666667 106.666667 447.36 106.666667 394.026667v-169.173334C106.666667 171.306667 149.973333 128 203.306667 128h169.173333C426.026667 128 469.333333 171.306667 469.333333 224.64v169.173333c0 53.546667-43.306667 96.853333-96.64 96.853334zM799.36 917.333333h-169.173333c-53.333333 0-96.64-43.306667-96.64-96.64v-169.173333c0-53.333333 43.306667-96.64 96.64-96.64h169.173333c53.333333 0 96.64 43.306667 96.64 96.64v169.173333c0 53.333333-43.306667 96.64-96.64 96.64zM372.693333 917.333333H203.306667C149.973333 917.333333 106.666667 874.026667 106.666667 820.693333v-169.173333C106.666667 597.973333 149.973333 554.666667 203.306667 554.666667h169.173333c53.333333 0 96.64 43.306667 96.64 96.64v169.173333A96.426667 96.426667 0 0 1 372.693333 917.333333z"
              p-id="4521"
              fill={logoColor == 1 ? selectedColor : notSelectedColor}
            >
              \
            </path>
          </svg>
        </div>

      </div>
      {/* -------日期logo------ */}
      <div
        className={`w-14 h-14 flex justify-center items-center  ml-2 rounded-l-3xl +${logoColor == 2 ? selectedColorBg : notSelectedColorBg}`}
        onClick={() => selectedELement(2)}>
           <div className="w-10 h-10 my-4 ">
        <svg
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="10741"
          width="100%"
          height="100%"
        >
          <path
            d="M475.451077 588.012308h73.097846A36.233846 36.233846 0 0 0 585.097846 551.384615a36.233846 36.233846 0 0 0-36.548923-36.78523h-73.097846A36.233846 36.233846 0 0 0 438.902154 551.384615a36.233846 36.233846 0 0 0 36.548923 36.706462z m0 146.983384h73.097846a36.233846 36.233846 0 0 0 36.548923-36.78523 36.233846 36.233846 0 0 0-36.548923-36.706462h-73.097846a36.233846 36.233846 0 0 0-36.548923 36.706462 36.233846 36.233846 0 0 0 36.548923 36.78523zM877.489231 73.728H731.214769V37.021538A36.233846 36.233846 0 0 0 694.744615 0.236308a36.233846 36.233846 0 0 0-36.470153 36.78523v36.706462H365.804308V37.021538A36.233846 36.233846 0 0 0 329.255385 0.236308a36.233846 36.233846 0 0 0-36.470154 36.78523v36.706462H146.510769c-80.344615 0-146.195692 66.166154-146.195692 146.983385v587.69723c0 80.817231 65.772308 146.983385 146.195692 146.983385h730.820923c80.344615 0 146.195692-66.166154 146.195693-146.983385V220.711385A146.983385 146.983385 0 0 0 877.410462 73.728z m73.097846 734.680615a73.491692 73.491692 0 0 1-73.097846 73.491693H146.510769a73.491692 73.491692 0 0 1-73.097846-73.491693V367.616h877.016615v440.792615z m0-514.284307H73.491692v-73.412923c0-40.408615 32.925538-73.491692 73.097846-73.491693h146.195693v36.706462a36.233846 36.233846 0 0 0 36.470154 36.785231 36.233846 36.233846 0 0 0 36.548923-36.785231V147.298462h292.391384v36.706461a36.233846 36.233846 0 0 0 36.470154 36.785231 36.233846 36.233846 0 0 0 36.548923-36.785231V147.298462h146.195693c40.172308 0 73.097846 33.083077 73.097846 73.491692v73.412923zM256.236308 734.995692h73.019077a36.233846 36.233846 0 0 0 36.548923-36.78523 36.233846 36.233846 0 0 0-36.548923-36.706462h-73.019077a36.233846 36.233846 0 0 0-36.548923 36.706462 36.233846 36.233846 0 0 0 36.548923 36.78523z m438.429538-146.983384h73.097846A36.233846 36.233846 0 0 0 804.312615 551.384615a36.233846 36.233846 0 0 0-36.548923-36.78523H694.744615A36.233846 36.233846 0 0 0 658.195692 551.384615a36.233846 36.233846 0 0 0 36.470154 36.706462z m-438.429538 0h73.019077A36.233846 36.233846 0 0 0 365.804308 551.384615a36.233846 36.233846 0 0 0-36.548923-36.78523h-73.019077A36.233846 36.233846 0 0 0 219.687385 551.384615a36.233846 36.233846 0 0 0 36.548923 36.706462z m438.429538 146.983384h73.097846a36.233846 36.233846 0 0 0 36.548923-36.78523 36.233846 36.233846 0 0 0-36.548923-36.706462H694.744615a36.233846 36.233846 0 0 0-36.470153 36.706462 36.233846 36.233846 0 0 0 36.470153 36.78523z"
            fill={logoColor == 2 ? selectedColor : notSelectedColor}
            p-id="10742"
          ></path>
        </svg>
        </div>
      </div>
    </div>
  );
}

export default Nav;
