import React, { useEffect } from "react";
import './App.css'
import RouterElements from "./routers";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function App() {
  const navigate=useNavigate();

  useEffect(() => {
    navigate("/register");
 
  }, [])
  
  return <>
      <RouterElements/>
  </>;
}

export default App;



