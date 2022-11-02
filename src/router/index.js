import Login from "../pages/login/Login";
import {Navigate} from "react-router-dom"
const publiceRouter=[
    {
        path:'/login',
        element:<Login /> 
    },{
        path:'*',
        element:<Navigate to="/login"/>
    }
]
export { publiceRouter }