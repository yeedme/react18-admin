import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const notSelectedColor = "white";
const selectedColor = "black";
const selectedColorBg = " bg-white ";
const notSelectedColorBg = " bg-zinc-900 ";

function Nav() {
  const navigate=useNavigate();
  const [logoColor, setLogoColor] = useState<number>(1);

  const selectedELement = (index: number): void => {
    setLogoColor(index);
  };
  useEffect(()=>{

  },[logoColor])
  //待优化：map遍历生成Nav ,但是svg样式问题在map下不好解决
  return (
    //  NAV
    <div className=" w-16 h-screen bg-zinc-900 fixed  z-50 lg:flex hidden flex-col justify-center items-center ">
      <div className="h-72 w-full flex flex-col justify-between items-center ">
        {/* ---------------数据面板图标----------------- */}
        {/* --- logo样式背景--- */}
        <div
          className={`w-14 h-14 flex justify-center items-center  ml-2 rounded-l-3xl +${
            logoColor == 1 ? selectedColorBg : notSelectedColorBg
          }`}
          onClick={() => {selectedELement(1),navigate('/dashboard')}}
        >
          <div className="w-8 h-8 my-4 ">
            {/* --- logoSvg--- */}
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
              ></path>
            </svg>
          </div>
          {/* --- 选中后显示黑点--- */}
          <span
            className={`w-3 h-3 rounded-full ml-20 absolute +${
              logoColor == 1 ? " bg-black " : " hidden"
            }`}
          ></span>
        </div>
        {/* ---------------地图logo--------------- */}
        {/* --- logo样式背景--- */}
        <div
          className={`w-14 h-14 flex justify-center items-center  ml-2 rounded-l-3xl +${
            logoColor == 2 ? selectedColorBg : notSelectedColorBg
          }`}
          onClick={() => selectedELement(2)}
        >
          {/* --- logoSvg--- */}
          <div className="w-8 h-8 my-4 ">
            <svg
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="10741"
              width="100%"
              height="100%"
            >
              <path
                d="M85.333333 469.717333C85.333333 451.829333 99.658667 437.333333 117.333333 437.333333s32 14.506667 32 32.384V786.133333c0 5.962667 4.778667 10.794667 10.666667 10.794667a10.56 10.56 0 0 0 5.045333-1.28l154.848-84.021333a73.898667 73.898667 0 0 1 72.853334 1.290666l252.544 148.842667a10.56 10.56 0 0 0 10.122666 0.341333l213.333334-107.264c3.626667-1.824 5.92-5.568 5.92-9.664V469.717333C874.666667 451.829333 888.992 437.333333 906.666667 437.333333s32 14.506667 32 32.384V745.173333c0 28.682667-16.053333 54.890667-41.44 67.658667l-213.333334 107.264a73.898667 73.898667 0 0 1-70.805333-2.378667L360.533333 768.896a10.56 10.56 0 0 0-10.410666-0.192l-154.848 84.032a73.973333 73.973333 0 0 1-35.285334 8.96c-41.237333 0-74.666667-33.813333-74.666666-75.552V469.717333z m672-132.266666c0 87.808-73.173333 192.917333-217.056 320.288a42.666667 42.666667 0 0 1-56.554666 0C339.829333 530.378667 266.666667 425.258667 266.666667 337.450667 266.666667 203.968 376.64 96 512 96s245.333333 107.968 245.333333 241.450667z m-426.666666 0c0 61.514667 59.712 149.557333 181.333333 259.701333 121.621333-110.144 181.333333-198.186667 181.333333-259.701333C693.333333 239.584 612.277333 160 512 160s-181.333333 79.573333-181.333333 177.450667zM512 405.333333a64 64 0 1 1 0-128 64 64 0 0 1 0 128z"
                fill={logoColor == 2 ? selectedColor : notSelectedColor}
                p-id="2848"
              ></path>
            </svg>
          </div>
          {/* --- 选中后显示黑点--- */}
          <span
            className={`w-3 h-3 rounded-full ml-20 absolute +${
              logoColor == 2 ? " bg-black " : " hidden"
            }`}
          ></span>
        </div>
        {/* ---------------主页logo--------------- */}
        {/* --- logo样式背景--- */}
        <div
          className={`w-14 h-14 flex justify-center items-center  ml-2 rounded-l-3xl +${
            logoColor == 3 ? selectedColorBg : notSelectedColorBg
          }`}
          onClick={() => {selectedELement(3),  navigate("/home")}}
        >
          {/* --- logoSvg--- */}
          <div className="w-8 h-8 my-4 ">
            <svg
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="10741"
              width="100%"
              height="100%"
            >
              <path
                 d="M923.733333 394.666667c-85.333333-70.4-206.933333-174.933333-362.666666-309.333334C533.333333 61.866667 490.666667 61.866667 462.933333 85.333333c-155.733333 134.4-277.333333 238.933333-362.666666 309.333334-14.933333 14.933333-25.6 34.133333-25.6 53.333333 0 38.4 32 70.4 70.4 70.4H192v358.4c0 29.866667 23.466667 53.333333 53.333333 53.333333H405.333333c29.866667 0 53.333333-23.466667 53.333334-53.333333v-206.933333h106.666666v206.933333c0 29.866667 23.466667 53.333333 53.333334 53.333333h160c29.866667 0 53.333333-23.466667 53.333333-53.333333V518.4h46.933333c38.4 0 70.4-32 70.4-70.4 0-21.333333-10.666667-40.533333-25.6-53.333333z m-44.8 59.733333h-57.6c-29.866667 0-53.333333 23.466667-53.333333 53.333333v358.4h-138.666667V661.333333c0-29.866667-23.466667-53.333333-53.333333-53.333333h-128c-29.866667 0-53.333333 23.466667-53.333333 53.333333v206.933334H256V507.733333c0-29.866667-23.466667-53.333333-53.333333-53.333333H145.066667c-4.266667 0-6.4-2.133333-6.4-6.4 0-2.133333 2.133333-4.266667 2.133333-6.4 85.333333-70.4 206.933333-174.933333 362.666667-309.333333 4.266667-4.266667 10.666667-4.266667 14.933333 0 155.733333 134.4 277.333333 238.933333 362.666667 309.333333 2.133333 2.133333 2.133333 2.133333 2.133333 4.266667 2.133333 6.4-2.133333 8.533333-4.266667 8.533333z"
                 fill={logoColor == 3 ? selectedColor : notSelectedColor}
                p-id="10742"
              ></path>
            </svg>
          </div>
          {/* --- 选中后显示黑点--- */}
          <span
            className={`w-3 h-3 rounded-full ml-20 absolute +${
              logoColor == 3 ? " bg-black " : " hidden"
            }`}
          ></span>
        </div>
        {/* ---------------日期logo--------------- */}
        {/* --- logo样式背景--- */}
        <div
          className={`w-14 h-14 flex justify-center items-center  ml-2 rounded-l-3xl +${
            logoColor == 4 ? selectedColorBg : notSelectedColorBg
          }`}
          onClick={() => selectedELement(4)}
        >
          {/* --- logoSvg--- */}
          <div className="w-8 h-8 my-4 ">
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
                fill={logoColor == 4 ? selectedColor : notSelectedColor}
                p-id="10742"
              ></path>
            </svg>
          </div>
          {/* --- 选中后显示黑点--- */}
          <span
            className={`w-3 h-3 rounded-full ml-20 absolute +${
              logoColor == 4 ? " bg-black " : " hidden"
            }`}
          ></span>
        </div>
      </div>
    </div>
  );
}

export default Nav;
