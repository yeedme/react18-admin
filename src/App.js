import React, { useEffect } from "react";
import {axiosGetLoginStatus} from "./utils/http";
import Login from "./Login/Login";
import { useRoutes } from "react-router-dom";
import routers from "./router/index"
export default function App() {
  const element=useRoutes(routers);
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
