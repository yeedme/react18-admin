import React, { useState } from "react";
import Yinput from "../components/Yinput";

function Login() {
  const [user,setUser]=useState("");
  const [password,setPassword]=useState("");
  //组件通信
  function getUser(data:string):void{
    setUser(data);
  }
  function getPassword(data:string):void{
    setPassword(data);
  }
  return (
    <div className="w-screen h-screen pt-8">
      <Yinput title="用户名" dataChange={getUser}/>
      <Yinput title="密码" dataChange={getPassword}/>
    </div>
  );
}

export default Login;
