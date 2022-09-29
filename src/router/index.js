import Admin from "../compontent/Admin";
import Normal from "../compontent/Normal";
import Login from "../Login/Login";
const routers=[{
    path:'/admin',
    element:<Admin/>,
    children:[{
            path:'normal',
            element:<Normal/>
        
    }]
},
,{
    path:'/login',
    element:<Login/>
},{
    path:'/',
    element:<Login/>
}]
export default routers