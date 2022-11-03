
import {Navigate} from "react-router-dom"
import LoginOrRegistered from '../pages/LoginOrRegistered/LoginOrRegistered'
const publiceRouter=[
    {path:'*',
    element:<Navigate to="/LorR"/>
    },
    {
        path:"/LorR",
        element:<LoginOrRegistered/>
    }
]
export { publiceRouter }