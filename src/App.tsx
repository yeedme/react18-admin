import React, { useEffect } from "react";
import './App.css'
import RouterElements from "./routers";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate=useNavigate();
  useEffect(() => {
    navigate("/")

  }, [])
  
  return <>
      <RouterElements/>
  </>;
}

export default App;
