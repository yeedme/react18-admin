import React, { useEffect } from "react";
import {axiosGetLoginStatus} from "./utils/http";
import { useRoutes } from "react-router-dom";
import routers from "./router/index"
export default function App() {
  const element=useRoutes(routers);//路由表 生成路由
  const gets= async() =>{
    const k=await axiosGetLoginStatus();
    console.log(k)
  } 
  
  useEffect(()=>{
  //  gets();

  })

  return (
    <div>
        {element}
    </div>
  );
}
