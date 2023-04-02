import React, { useEffect, useState } from "react";
import Yinput from "../components/Yinput";
import AnimateBackGround from "../components/animation";
import { useNavigate } from "react-router-dom";
import { getPasswordStrength } from "../utils";
export default function Register() {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [confirm, setConfirm] = useState(false);

  const [passwrodStrength, setPasswordStrength] = useState<number>(0);

  function getUserName(data: string) {
    setUserName(data);
  }

  function getPassword(data: string) {
    setPassword(data);
  }

  function getConfirmPassword(data: string) {
    setConfirmPassword(data);
  }

  //进行验证 修改提交按钮
  useEffect(() => {
    if (confirmpassword.length >= 6 && password == confirmpassword) {
      setConfirm(true);
    } else {
      setConfirm(false);
    }
  }, [confirmpassword, password]);
  //密码强度
  useEffect(() => {
    let strength = getPasswordStrength(confirmpassword);
    setPasswordStrength(strength);
    if (confirmpassword == "" || confirmpassword == null) {
      setPasswordStrength(0);
    }
  }, [confirmpassword]);
  return (
    <div className="w-screen h-screen  flex justify-center items-center ">
      <AnimateBackGround />
      <div className="animation_backGroundColor h-auto w-80  py-8 flex flex-col justify-around items-center absolute">
        <h2 className="text-slate-200 p-4">欢迎你加入我们</h2>
        <div>
          <Yinput title="用户名" type="text" dataChange={getUserName} />
          <Yinput title="密码" type="password" dataChange={getPassword} />
          <Yinput
            title="确认密码"
            type="password"
            dataChange={getConfirmPassword}
          />
          <div className="w-60 h-12  flex justify-around items-center ">
            <div
              className={`" w-16 h-3 " + ${
                passwrodStrength >= 1 ? " bg-yellow-200 " : " bg-slate-500 "
              }`}
            ></div>
            <div
              className={`" w-16 h-3 " + ${
                passwrodStrength >= 2 ? " bg-yellow-300 " : " bg-slate-500 "
              }`}
            ></div>
            <div
              className={`" w-16 h-3 " + ${
                passwrodStrength >= 3 ? " bg-yellow-400 " : " bg-slate-500 "
              }`}
            ></div>
            <div className="w-4 h-3 flex justify-center items-center text-white">
              <h2>强</h2>
            </div>
          </div>
        </div>
        <div className="w-80 flex justify-center p-4">
          <button
            className={`${
              confirm ? " bg-orange-300 " : " bg-orange-00 "
            }+" text-white w-28 h-12 shadow-3xl shadow-orange-200 "`}
          >
            注册
          </button>
          <button
            onClick={() => navigate("/login")}
            className={
              " bg-orange-300 text-white w-28 h-12 shadow-3xl shadow-orange-200 "
            }
          >
            登入
          </button>
        </div>
      </div>
    </div>
  );
}
