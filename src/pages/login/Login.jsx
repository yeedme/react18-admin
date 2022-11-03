import React, { useEffect, useRef, useState } from "react";

import {message } from "antd";
import { inputRules } from "../../untils/filters";

import { loginGet } from "../../untils/http";
import "./Login.css";
export default function Login() {
  //两个ref绑定 用户名输入框和
  const accountInput = useRef(null);
  const passwordInput = useRef(null);

  // 输入框焦距后 会修改样式
  const loginOnFocus = (refs) => {
    if (refs === "accountInput") {
      accountInput.current.className = "LogininputContentOnFocus";
    } else {
      passwordInput.current.className = "LogininputContentOnFocus";
    }
  };
  // 输入框失焦后 会修改样式
  const loginOnBlur = (refs) => {
    if (refs === "accountInput") {
      accountInput.current.className = "LogininputContentOnBlur";
    } else {
      passwordInput.current.className = "LogininputContentOnBlur";
    }
  };

  //获取 account password的值
  const [account, setAccout] = useState("");
  const [password, setPassword] = useState("");

  const loginError = () => {
    message.info('用户名或者密码有误');
  };

  //提交 确认登入结果
  const checkLogin = async () => {
  // 与数据库匹配成功 则改为true
  let confim=false;
  loginError();
    //输入框不为空 则提交数据 进行判断
    if (account !== "" && password !== "") {
      const { result } = await loginGet();
      result.map((t) => {
        let { userName, passw } = t;
        if (userName === account && passw === password) {
          confim=true;
          console.log("dui");
        }
      });
      if(confim===false){
        loginError();
      };
 
    }
  };

  return (
    <div className="LoginContent flex_Jcenter_Acenter ">
      {/* 左侧图片展示区 */}
      <div className="LoginImg"></div>
      {/* 输入框组件  */}
      <div className="flex_JSpaceBetween_Acenter flexDirection_column LoginRightSilder">
        <div className="LoginBanner flex_Jcenter_Acenter">
          <div className="LoginBannerContent flex_JSpaceBetween_Acenter">
            <div className="LoginBannerContent_DivClick">登入</div>
            <div>注册</div>
          </div>
        </div>
        <div className="LoginForm">
          <div className="LoginTextContent">
            <h1>欢迎使用 yeedme!!</h1>
            <h2>拥有一切后台组件</h2>
          </div>

          {/* 用户名输入框  inputRules用于过滤 输入内容*/}
          <div className="LogininputContentOnBlur" ref={accountInput}>
            <p>用户名</p>
            <input
              className="LogininputStyle"
              onFocus={() => loginOnFocus("accountInput")}
              onBlur={() => loginOnBlur("accountInput")}
              onChange={(e) => setAccout(inputRules(e.target.value))}
              value={account}
              required
            />
          </div>

          {/* 密码输入框 */}
          <div className="LogininputContentOnBlur" ref={passwordInput}>
            <p>密码</p>
            <input
              className="LogininputStyle"
              type="password"
              onFocus={() => loginOnFocus("passwordInput")}
              onBlur={() => loginOnBlur("passwordInput")}
              onChange={(e) => setPassword(inputRules(e.target.value))}
              value={password}
              required
            />
          </div>

          <div className="LoginButtonContent">
            <button className="LoginButtonLogin" onClick={checkLogin}>
              登入
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
