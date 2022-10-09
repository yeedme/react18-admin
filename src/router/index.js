import Transit from "../pages/Transit";
import React from "react";
//路由懒加载
const Home = React.lazy(() => import("../compontent/home/Home"));
const Login = React.lazy(() => import("../Login/Login"));
const OverView = React.lazy(() => import("../pages/overview/Overview"));
const AllOrder = React.lazy(() => import("../pages/order/AllOrder"));
const AddOrder = React.lazy(() => import("../pages/order/AddOrder"));
const Products = React.lazy(() => import("../pages/Products/Products"));
const AddProducts = React.lazy(() => import("../pages/Products/AddProducts"));
const AllProducts = React.lazy(() => import("../pages/Products/AllProducts"));
const routers = [
  {
    path: "/transit",
    element: <Transit />,
    children: [
      {
        path: "home",
        element: <Home />,
        children: [
          {
            path: "overview",
            element: <OverView />,
          },
          {
            path: "order/allOrder",
            element: <AllOrder />,
          },
          {
            path: "order/addOrder",
            element: <AddOrder />,
          },
          {
            path: "products",
            element: <Products />,
            children: [
              {
                path: "allproducts",
                element: <AllProducts />,
              },
              {
                path: "addproducts",
                element: <AddProducts />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Login />,
  },
];
export default routers;
