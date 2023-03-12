import React, { useState } from "react";
//login 页面 组件
interface inputProps{
     title: string
}
function Yinput(props:inputProps) {
  return (
    <div className="w-60 h-12 bg-slate-700 flex text-">
      <div className="w-2 h-12 bg-yellow-300 mr-2" />
      <div className="text-slate-100">
        <h2>{props.title}</h2>
        <input type={props.title=='密码'?'password':'text'} className="w-full input" />
      </div>
    </div>
  );
}

export default Yinput;
