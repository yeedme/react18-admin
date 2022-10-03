import React from 'react'
//在overVIew 问候语 
import { useSelector } from 'react-redux/'
import {RealName} from "../../Store/LoginStatus"
export default function ContentTop() {
  const name=useSelector(RealName);
  return (
    <div>
        <h2>Welcome back,{name}</h2>
        <p>Here's what's happing with your store today</p>
    </div>
  )
}
