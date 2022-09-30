import React from "react";
import { useRoutes } from "react-router-dom";
import routers from "./router/index"
export default function App() {
  const element=useRoutes(routers);//路由表 生成路由

  return (
    <div>
        {element}
    </div>
  );
}
