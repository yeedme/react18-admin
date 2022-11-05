import React, { useEffect } from 'react'
import { selectloginStatus } from "../store/loginSlice";
import { useSelector } from "react-redux";
import { useNavigate ,Outlet} from "react-router-dom";
export default function Guard() {
  const loginStatus=useSelector(selectloginStatus);
  const navigate=useNavigate();
  //loginStatus 成功就
  useEffect(()=>{
       loginStatus?navigate('/guard/LayoutHome'):navigate("/LorR")
    
  },[]);

  return (
    // <>{loginStatus?<Outlet/>:""}</>
    <div>
    <Outlet></Outlet>  
    </div>
  )
}
