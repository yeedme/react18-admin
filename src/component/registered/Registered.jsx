import React, { useEffect, useState } from "react";
import "./Registered.less";
import { strengthLeverFilter, inputRules } from "../../untils/filters";
import { message} from "antd"
export default function Registered() {
  //密码强度
  const [passwordstrength, setPasswordstrength] = useState(0);

  const [prePassword, setPrepassword] = useState(""); //密码
  const [confirmPassword, setConfirmPassword] = useState(""); //确认密码
  
  //strengthLeverFilter()返回密码强度 
  useEffect(() => {
    setPasswordstrength(strengthLeverFilter(prePassword));
  }, [prePassword]);
  const thanksToTest=()=>{
    message.info('感谢测试 注册未开放')
  }
  return (
    <div className="y_Registered">
      <h1>创建账号</h1>
      <div>
        <div className="y_RegisteredInputContent">
          用户名
          <input className="y_RegisteredInput" />
        </div>
        <div className="y_RegisteredInputContent">
          密码
          <input
            className="y_RegisteredInput"
            type="password"
            value={prePassword}
            onChange={(e) => {
              setPrepassword(inputRules(e.target.value));
            }}
          />
        </div>
            {/* 根据密码强度来 显示 */}
        <div className="y_Passwordstrength">
          <div className={passwordstrength > 0 ? "y_strength" : ""}></div>
          <div className={passwordstrength > 1 ? "y_strength" : ""}></div>
          <div className={passwordstrength > 2 ? "y_strength" : ""}></div>
          密码等级{passwordstrength}
        </div>

        <div className="y_RegisteredInputContent">
          确认密码
          <input
            className="y_RegisteredInput"
            type="password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(inputRules(e.target.value));
            }}
          />
        </div>
        <div>
          <button className="y_RegisteredButton" onClick={thanksToTest}>注册</button>
        </div>
      </div>
    </div>
  );
}
