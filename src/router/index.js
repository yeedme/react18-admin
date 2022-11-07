
import {Navigate} from "react-router-dom"
import LoginOrRegistered from '../pages/LoginOrRegistered/LoginOrRegistered'
import  Guard  from "../pages/Guard";
import LoadingTypeone from "../component/Loading/LoadingTypeone";
import React, {Suspense} from "react";
import E403 from "../pages/E403.jsx";

const LayoutHome=React.lazy(()=>
 import('../pages/Layout/LayoutHome')   
)
const Dashboard=React.lazy(()=>
 import('../pages/Dashboard/Dashboard')   
)
const Order=React.lazy(()=>
 import('../pages/Order/Order')   
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
                <Suspense fallback={<LoadingTypeone/>}>
                    <LayoutHome/>
                 </Suspense>,
                 children:[{
                    path:"dashboard",
                    element:<Suspense fallback={<LoadingTypeone/>}>
                                <Dashboard/>
                            </Suspense>
                 },{
                    path:"order",
                    element:<Suspense fallback={<LoadingTypeone/>}>
                                <Order/>
                            </Suspense>
                 }]
                
        }]
    },{
        path:"/403",
        element:<E403/>
    }
]
export { publiceRouter }