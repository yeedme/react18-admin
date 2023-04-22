import React, { useEffect, useState } from "react";
import Yinput from "../components/Yinput";
import AnimateBackGround from "../components/animation";
import { useNavigate } from "react-router-dom";
import { axiosGetLogin } from "../utils/http";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { turnOn } from "../store/loginStatus";
import { setCookie } from "../utils/cookie";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState("");
  const [passwords, setPasswords] = useState("");
  const [autoLogin,setAutoLogin]=useState(false);
  //组件通信
  function getUser(data: string): void {
    setUser(data);
  }

  function getPassword(data: string): void {
    setPasswords(data);
  }
  //模拟向后台验证数据
  const checkLogin = async (): Promise<void> => {
    const data: any = await axiosGetLogin();
    const { name, password } = data[0];
    //登入成功跳转 判断是否开启自动状态 将全局状态设置为true
    if (user == name && password === passwords) {
      if(autoLogin){
        dispatch(turnOn);
        setCookie(user,true)
      }
      navigate("/dashboard");
    } else {
      message.info("输入有误");
    }
  };


  return (
    <div className="w-screen h-screen relative flex justify-center items-center">
      <AnimateBackGround />
      <div className="h-auto w-80 py-8 flex flex-col justify-around items-center absolute  animation_backGroundColor">
        {/* ------登入欢迎语----- */}
        <h2 className="text-slate-200 py-8">hi,欢迎来到yeedme</h2>
        {/* ------登入组件----- */}
        <div>
          <Yinput title="用户名" type="text" dataChange={getUser} />
          <Yinput title="密码" type="password" dataChange={getPassword} />
          <div className="w-60 flex justify-between items-center mt-8">
            <button
              onClick={() => checkLogin()}
              className="bg-orange-300 text-white w-24 h-12 shadow-3xl shadow-orange-200"
            >
              登入
            </button>
            <div>
              <h2 className="text-slate-400 cursor-pointer">
                <input type="checkbox" onClick={()=>setAutoLogin(autoLogin=>!autoLogin)}/>
                自动登入
              </h2>
              <h2
                onClick={() => navigate("/register")}
                className="text-slate-400 cursor-pointer"
              >
                注册
              </h2>
            </div>
          </div>
        </div>

        {/* -------其他登入方式------- */}

        <div className="flex w-60 justify-between items-center h-16">
          <div className="text-slate-400">其他账号登入</div>
          <div className="flex items-center ">
            <div className="w-8 h-8">
              <svg
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4777"
                width="100%"
                height="100"
              >
                <path
                  d="M672 1024c-64 0-115.2-12.8-160-40.533333l-2.133333 0C469.333333 1011.2 413.866667 1024 347.733333 1024c-61.866667 0-115.2-14.933333-157.866667-40.533333-51.2-29.866667-78.933333-76.8-78.933333-130.133333 0-10.666667 2.133333-23.466667 4.266667-34.133333-36.266667-21.333333-61.866667-61.866667-68.266667-113.066667-6.4-46.933333 0-100.266667 19.2-160C76.8 512 93.866667 469.333333 128 435.2c2.133333-27.733333 8.533333-55.466667 17.066667-78.933333C147.2 264.533333 183.466667 181.333333 251.733333 106.666667c72.533333-72.533333 160-106.666667 260.266667-106.666667 102.4 0 189.866667 36.266667 260.266667 106.666667 68.266667 68.266667 104.533333 153.6 106.666667 251.733333 10.666667 27.733333 14.933333 49.066667 17.066667 74.666667 23.466667 29.866667 49.066667 68.266667 64 115.2 19.2 59.733333 25.6 113.066667 19.2 160-6.4 55.466667-29.866667 93.866667-68.266667 113.066667 2.133333 10.666667 4.266667 21.333333 4.266667 32 0 51.2-25.6 96-78.933333 130.133333C793.6 1009.066667 738.133333 1024 672 1024zM480 898.133333l57.6 0 10.666667 8.533333c32 23.466667 70.4 34.133333 123.733333 34.133333 51.2 0 89.6-8.533333 119.466667-27.733333 36.266667-23.466667 40.533333-42.666667 40.533333-57.6 0-14.933333-2.133333-23.466667-10.666667-34.133333l-44.8-66.133333L853.333333 755.2c0 0 0 0 0 0l0 0 8.533333-2.133333c8.533333-2.133333 25.6-8.533333 29.866667-53.333333 4.266667-34.133333 0-74.666667-14.933333-121.6l0-2.133333c-8.533333-29.866667-25.6-59.733333-57.6-96l-10.666667-12.8L808.533333 448c0-21.333333-4.266667-40.533333-14.933333-66.133333l-2.133333-8.533333 0-8.533333c0-78.933333-27.733333-142.933333-81.066667-198.4C657.066667 113.066667 590.933333 85.333333 512 85.333333c-78.933333 0-145.066667 27.733333-200.533333 81.066667-53.333333 59.733333-81.066667 125.866667-81.066667 198.4l0 10.666667L226.133333 384c-8.533333 17.066667-12.8 38.4-12.8 61.866667l0 25.6-14.933333 12.8c-27.733333 23.466667-42.666667 57.6-51.2 85.333333-14.933333 46.933333-21.333333 87.466667-14.933333 121.6 4.266667 25.6 12.8 44.8 29.866667 53.333333 4.266667 0 8.533333 2.133333 12.8 4.266667 0 0 2.133333 0 2.133333 0l76.8 0-44.8 66.133333c-8.533333 10.666667-10.666667 21.333333-10.666667 34.133333 0 23.466667 12.8 42.666667 38.4 57.6l2.133333 2.133333c27.733333 19.2 66.133333 27.733333 113.066667 27.733333 53.333333 0 96-10.666667 121.6-32L480 898.133333z"
                  p-id="4778"
                  fill="#64748b"
                ></path>
              </svg>
            </div>
            <div className="w-8 h-8">
              <svg
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3793"
                width="100%"
                height="100"
              >
                <path
                  d="M767.818667 409.173333C867.338667 444.266667 938.666667 539.136 938.666667 650.666667c0 42.709333-10.496 83.978667-30.261334 120.842666-1.792 3.338667-4.992 8.928-9.696 16.96l14.613334 53.557334c6.506667 23.893333-15.402667 45.813333-39.296 39.296l-53.642667-14.634667-6.229333 3.669333A254.933333 254.933333 0 0 1 682.666667 906.666667c-77.994667 0-147.84-34.88-194.805334-89.888a352.608 352.608 0 0 1-56.64 4.554666c-63.338667 0-124.266667-16.853333-177.472-48.298666-1.834667-1.088-6.410667-3.733333-13.632-7.893334l-80.544 21.653334c-23.914667 6.432-45.76-15.573333-39.146666-39.434667l21.792-78.752a961.205333 961.205333 0 0 1-15.904-27.317333A336.384 336.384 0 0 1 85.333333 480c0-188.618667 154.965333-341.333333 345.888-341.333333 159.914667 0 297.984 108.010667 335.818667 259.296 0.949333 3.765333 1.173333 7.552 0.778667 11.2z m-68.106667-13.952C662.88 282.037333 555.178667 202.666667 431.221333 202.666667 275.434667 202.666667 149.333333 326.933333 149.333333 480c0 46.272 11.498667 90.837333 33.194667 130.698667 2.88 5.290667 10.176 17.706667 21.621333 36.746666a32 32 0 0 1 3.413334 25.013334l-10.517334 37.994666 39.232-10.549333a32 32 0 0 1 24.234667 3.146667c14.272 8.192 22.773333 13.098667 25.802667 14.890666A283.882667 283.882667 0 0 0 431.221333 757.333333c6.154667 0 12.288-0.192 18.389334-0.576A255.061333 255.061333 0 0 1 426.666667 650.666667c0-141.386667 114.613333-256 256-256 5.728 0 11.413333 0.192 17.045333 0.554666z m133.706667 397.056a32 32 0 0 1 3.338666-24.725333 996.672 996.672 0 0 0 15.242667-26.293333A190.997333 190.997333 0 0 0 874.666667 650.666667c0-106.037333-85.962667-192-192-192s-192 85.962667-192 192 85.962667 192 192 192a190.933333 190.933333 0 0 0 98.570666-27.2c2.208-1.322667 8.288-4.874667 18.517334-10.837334a32 32 0 0 1 24.522666-3.210666l12.565334 3.424-3.424-12.565334zM330.666667 426.666667a42.666667 42.666667 0 1 1 0-85.333334 42.666667 42.666667 0 0 1 0 85.333334z m192 0a42.666667 42.666667 0 1 1 0-85.333334 42.666667 42.666667 0 0 1 0 85.333334z m85.333333 202.666666a32 32 0 1 1 0-64 32 32 0 0 1 0 64z m149.333333 0a32 32 0 1 1 0-64 32 32 0 0 1 0 64z"
                  fill="#64748b"
                  p-id="3794"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
