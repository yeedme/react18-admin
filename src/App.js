import React from 'react'

import './App.less';
import { useRoutes } from "react-router-dom";
import { publiceRouter } from './router/index';
export default function App() {
  const el=useRoutes(publiceRouter)
  return (
    <>
      {el}
    </>
  )
}
