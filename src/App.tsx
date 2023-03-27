import React, { useEffect, useState } from "react";
import "./App.css";
import RouterElements from "./routers";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLoginStatus } from "./store/loginStatus";

function App() {
  const navigate = useNavigate();
  let ls=useSelector(selectLoginStatus);
  const [loginStatus]=useState(ls)
  useEffect(() => {
    //selectLoginStatus==true说明已经登入或者是自动登入
    console.log(loginStatus);
    
    // if(loginStatus){
    //   navigate("/bashborad");
      
    // }else{
    //   navigate("/login");
    // }
     
  }, [loginStatus]);
  return (
    <>

      {/* <RouterElements /> */}
    </>
  );
}

export default App;
