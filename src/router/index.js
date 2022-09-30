
import  Transit  from "../pages/Transit";
import React from "react";
//路由懒加载
const Home=React.lazy(()=>import('../compontent/home/Home'));
const Login=React.lazy(()=>import('../Login/Login'));
const OverView=React.lazy(()=>import('../pages/overview/Overview'));
const Order=React.lazy(()=>import('../pages/order/Order'))
const routers=[{
    path:"/transit",
    element:<Transit/>,
    children:[{
        path:"home",
        element:<Home/>,
        children:[{
            path:"overview",
            element:<OverView/>,
        },{
            path:"order",
            element:<Order/>,
        }]
    }]
},
{
    path:'/login',
    element:<Login/>
},{
    path:'/',
    element:<Login/>
}]
export default routers