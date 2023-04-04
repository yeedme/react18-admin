import React, { lazy, Suspense }  from "react";
import type { RouteObject } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import { Skeleton } from "antd";
import Login from "../pages/Login";
import Layout from "../layout/Layout";
const Home = lazy(() => import("../pages/Home"));
const Register = lazy(() => import("../pages/Register"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Order=lazy(()=>import('../pages/Order'))
const newRouter: RouteObject[] = [
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "order",
        element: <Order />,
      },
    ],
  },
  {
    path: "register",
    element: <Register />,
  },
];
function RouterElements() {
  const elements = useRoutes(newRouter);
  return <>{elements}</>;
}

function LazyRouterElements() {
  return (
    <Suspense fallback={<Skeleton/>}>
      <RouterElements />
    </Suspense>
  );
}

export default LazyRouterElements;