import React, { useEffect, useState } from "react";
import Login from "../../component/Login/Login";
import "./LoginOrRegistered.less";
import Registered from "../../component/registered/Registered";


//注册和登入 页面
export default function LoginOrRegistered() {
  const [page, setPage] = useState("login");
  useEffect(() => {}, [page]);
  return (
    <>
    {/* 背景动画  */}
      <div className="LoginOrRegistered">
      <ul className="bg-squares">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul> 
        {/* 登入/注册展示区 */}
        <div className="flex_Jcenter_Acenter position_absolute Animate_Mask" >
        <div className="right">
          <div className="LoginOrRegistered_Nav flex_JSpaceBetween_AflexEnd">
            <div
              onClick={() => setPage("login")}
              className={page === "login" ? "selectDiv" : ""}
            >
              登入
            </div>
            <div
              onClick={() => setPage("registered")}
              className={page === "login" ? "" : "selectDiv"}
            >
              注册
            </div>
          </div>
      {/* 切换组件 */}
          <div className="showContent flex_Jcenter_Acenter">
            <div className={`  ${page === "login" ? " inRight" : " inLeft"}`}>
              {page === "login" ? <Login /> : <Registered />}
            </div>
          </div>
        </div>
        </div>
     
      </div>
    </>
  );
}
