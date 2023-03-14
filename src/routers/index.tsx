import React from 'react'
import type { RouteObject } from 'react-router-dom'
import Login from '../pages/Login'
import Layout from '../layout/Layout'
import Home from '../pages/Home'
import {useRoutes} from "react-router-dom"
const newRouter: RouteObject[] = [
    {
        path: "login",
        element: <Login />
    },
    {
        path: "/",
        element: <Layout />
    },
    {
        path: "/home",
        element: <Home />
    }
]
function RouterElements() {
    const elements=useRoutes(newRouter);
    return <>
        {elements}
    </>
}
export default RouterElements;