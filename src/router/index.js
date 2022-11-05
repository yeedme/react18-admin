
import {Navigate} from "react-router-dom"
import LoginOrRegistered from '../pages/LoginOrRegistered/LoginOrRegistered'
import  Guard  from "../pages/Guard";
import LoadingTypeone from "../component/Loading/LoadingTypeone";
import React, {Suspense} from "react";
const LayoutHome=React.lazy(()=>
 import('../pages/Layout/LayoutHome')   
)
const publiceRouter=[
    {path:'*',
    element:<Navigate to="/LorR"/>
    },
    {
        path:"/LorR",
        element:<LoginOrRegistered/>
    },
    {
        path:"/guard",
        element:<Guard/>,
        children:[{
            path:"LayoutHome",
            element:
                <Suspense >
                    <LayoutHome/>
                 </Suspense>
                
        }]
    }
]
export { publiceRouter }