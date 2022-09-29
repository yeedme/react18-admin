import React, { useState } from "react";
import { axiosGetLoginStatus } from "../utils/http";
import "./Login.css";
import { Button, message } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import  {online} from"../Store/LoginStatus"
import  { useDispatch} from "react-redux" 
//登入页面
export default function Login() {
  const dispatch=useDispatch()
  const [userName, setuserName] = useState(""); //不写初始值 就是不受控制组件   userName=undefined 那么这个组件就会受控组件变成非受控组件（控制台报错） input初始值不能是undefind
  const [password, setPassword] = useState("");
  // const Getdata=async(id,password) =>{
  //   const date=await axiosGetLoginStatus(id,password);
  //   console.log(date);
  //   setuserName('');
  //   setPassword('');
  // }
  // function commit(){
  //   console.log(userName+'-'+password);
  //   Getdata(userName,password);

  // }

  const [inputType, setInputTyp] = useState("password");
  //显示密码
  const ChangeInputType = () => {
    inputType == "password" ? setInputTyp("text") : setInputTyp("password");
  };
  //发送数据去后台如果是用户名和密码正确就跳转路由 （路由拦截）
  let checkLogin = async (id, name) => {
    let results = await axiosGetLoginStatus(id, name);
     if(results=='admin'){
       dispatch( online() );
     }
  };

  const commit = () => {
    if (userName && password) {
      checkLogin(userName, password);
    } else if (!userName && password) {
      message.error("The userName cannot be empty");
    } else if (!password && userName) {
      message.error("the password cannot be empty");
    } else {
      message.error("userName and password cannot be empty");
    }
  };
  return (
    <div className="LoginPage">
      <div className="LoginForm">
        <div>
          <h2>login</h2>
          <h3>Your account</h3>
        </div>

        {/* userName输入框*/}

        <div>
          <h3>UserName</h3>
          <div className="Login-Icon-box">
            <input
              placeholder="Basic usage"
              className="Login-input"
              value={userName}
              onChange={(e) => setuserName(e.target.value)}
            />
            {/* EyeOutlined占位置不显示 保持 userName和password输入框长度相同*/}
            <EyeOutlined
              style={{
                visibility: "hidden",
              }}
              className="passwordIcon"
            />
          </div>
        </div>

        {/* password 输入框*/}

        <div>
          <h3>Password</h3>
          <div className="Login-Icon-box">
            <input
              placeholder="Basic usage"
              type={inputType}
              className="Login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <EyeOutlined className="passwordIcon" onClick={ChangeInputType} />
          </div>
        </div>

        <Button type="primary" onClick={commit}>
          Display normal message
        </Button>
      </div>
    </div>
  );
}
