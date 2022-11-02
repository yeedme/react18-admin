import React, { useRef, useState } from "react";
import "./Login.less";

import { inputRules } from "../../untils/filters";
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

  const [account,setAccout]=useState('');
  const [password,setPassword]=useState('');
 
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
        <form className="LoginForm">
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
              onChange={ (e) =>(setAccout(inputRules(e.target.value))) } 
              value={account}
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
              onChange={ (e) =>(setPassword(inputRules(e.target.value))) } 
              value={password}
            />
          </div>

          <div className="LoginButtonContent">
            <button className="LoginButtonLogin">登入</button>
          </div>
        </form>
      </div>
    </div>
  );
}
