import React, { useEffect } from 'react'
//中转页面 路由跳转后进行确认 
import { useSelector } from 'react-redux'
import { selectStatus } from '../Store/LoginStatus'
import { useNavigate , Outlet} from "react-router-dom";
export default function Transit() {
    const navigate=useNavigate();
    const status=useSelector(selectStatus)
    useEffect(()=>{
        console.log("Transit中转路由 status"+status);
        status===true?navigate('home'):navigate('/login');
    },[])
  return (
    <div><Outlet/></div>
  )
}
