import  Home  from "../compontent/home/Home";
import  Transit  from "../pages/Transit";
import Login from "../Login/Login";
const routers=[{
    path:"/transit",
    element:<Transit/>,
    children:[{
        path:"home",
        element:<Home/>
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