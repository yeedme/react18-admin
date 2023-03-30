import React from 'react'
import type { RouteObject } from 'react-router-dom'
import Login from '../pages/Login'
import Layout from '../layout/Layout'
import Home from '../pages/Home'
import Register from '../pages/Register'
import {useRoutes} from "react-router-dom"
import  Dashboard  from "../pages/Dashboard";
const newRouter: RouteObject[] = [
    {
        path: "login",
        element: <Login />
    },
    {
        path: "/",
        element: <Layout />,
        children:[{
            path:'bashborad',
            element:<Dashboard/>
        },{
            path:"home",
            element:<Home/>
        }]
       
    },
    {
        path: "register",
        element: <Register />
    }
]
function RouterElements() {
    const elements=useRoutes(newRouter);
    return <>
        {elements}
    </>
}
export default RouterElements;