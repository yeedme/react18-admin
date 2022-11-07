import React, { useEffect } from 'react'

import './App.less';
import { useRoutes } from "react-router-dom";
import { publiceRouter } from './router/index';
import { useSelector } from 'react-redux';
import { selectAuth , selectloginStatus } from "./store/loginSlice";


// app 作为权限和路由跳转中枢

export default function App() {
  const auth=useSelector(selectAuth);
  //根据访问权限 修改路由
    useEffect(()=>{
    // console.log(auth);
  },[auth]);
  const el=useRoutes(publiceRouter)
  return (
    <>
 
         {el}  
     {/* <LayoutHome/>  */}
    </>
  )
}
