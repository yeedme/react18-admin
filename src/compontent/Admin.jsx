import React, { useEffect } from 'react'
import { useSelector } from 'react-redux/';
import { selectCount } from "../Store/LoginStatus"
import { useNavigate,Outlet}from "react-router-dom"
export default function Admin() {
    const v=useSelector(selectCount);
    const navigate=useNavigate()
    console.log(v);
  useEffect(()=>{
    if(v==false)
    navigate('/login');
  })
  return (
    <div>Admin<Outlet/></div>
    
  )
}
