import React, { useRef, useState } from "react";

import { Checkbox , message,notification} from "antd";

import { inputRules } from "../../untils/filters";
import { loginGet } from "../../untils/http"
import { useSelector, useDispatch} from 'react-redux';
import { setAuth,setLoginStatus } from "../../store/loginSlice";
import { useNavigate } from "react-router-dom"
import "./Login.less";
export default function Login() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  //绑定两个父容器 便于修改样式
  const accountInput = useRef(null);
  const passwordInput = useRef(null);

  //输入框焦距时 改变父容器的样式
  const inputOnFocus = (ref) => {
    ref.current.className = "y_LoginContentOnFocus";
  };
  //输入框失焦时 改变父容器的样式
  const inputOnBlur = (ref) => {
    ref.current.className = "y_LoginInputContent";
  };

  //保存 账号和密码数值
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const accountOrpasswor=()=>{
    message.error("用户名或者密码错误")
  }
  const Missinginformation=()=>{
    message.warning("请入用户名和密码")
  }
  //提交后台 获取验证
  const submitAll=async()=>{
    let confirm=false;
    if(account !=='' && password !=='' ){
      const {result}= await loginGet();

      result.map((t)=>{
       
        if( t.userName==account && t.password==password ){
          confirm=true;
          // t.auth=== true or false; 
          dispatch(setAuth(t.auth))
          dispatch(setLoginStatus(true))
          navigate('/guard');
          console.log("navigate('/guard');");
        }
      })
      confirm?message.success(`${account}欢迎登入`):accountOrpasswor();
    }
    else{
      Missinginformation();
    }
  }
  //显示账号便于测试
  const showAccunt=()=>{
    notification.open({
      message: '',
      description:'管理员账号：admin 密码：admin'
    });
  }
    
  
  return (
    <>
      <div className="y_LoginText">
        <h1>hi,欢迎yeedme后台管理</h1>
        <h2>V1.2 </h2>
      </div>
      <div className="y_LoginContent">
        {/* 用户名输入框  */}
        <div className="y_LoginInputContent" ref={accountInput}>
          <div>用户名</div>
          <input
            className="y_LoginInput"
            onBlur={() => {
              inputOnBlur(accountInput);
            }}
            onFocus={() => {
              inputOnFocus(accountInput);
            }}
            value={account}
            onChange={(e) => {
              setAccount(inputRules(e.target.value));
            }}
          />
        </div>

        {/* 密码输入框  */}
        <div className="y_LoginInputContent " ref={passwordInput}>
          <div>密码</div>
          <input
            className="y_LoginInput"
            onFocus={() => {
              inputOnFocus(passwordInput);
            }}
            onBlur={() => {
              inputOnBlur(passwordInput);
            }}
            value={password}
            onChange={(e) => {
              setPassword(inputRules(e.target.value));
            }}
            type="password"
          />
        </div>

        <div className="y_LoginCheckBoxContent">
          <Checkbox>自动登入</Checkbox>
          <p onClick={showAccunt}>点我显示账号</p>
        </div>
        <div className="y_LoginButtonContent">
          <button onClick={submitAll}>登入</button>
       
        </div>
      </div>

      {/* 其他链接  */}
      <div className="y_LoginOtherRelate flex_JSpaceBetween_Acenter">
        使用其他账号登入
        <span>
          <img src={require("../../static/logo/QQ_login.png")} alt="QQ" />
          <img src={require("../../static/logo/WeChat.png")} alt="wechat" />
        </span>
      </div>
    </>
  );
}
