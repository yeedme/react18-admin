import React, { useEffect, useState } from "react";
import "./App.css";
import LazyRouterElements from "./routers";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLoginStatus } from "./store/loginStatus";

function App() {
  const navigate = useNavigate();
  let ls=useSelector(selectLoginStatus);
  const [loginStatus]=useState(ls)
  useEffect(() => {    
    if(loginStatus){
      navigate("/dashboard ");
      
    }else{
      navigate("/login");
    }
     
  }, [loginStatus]);
  return (

      <LazyRouterElements />

  );
}

export default App;
