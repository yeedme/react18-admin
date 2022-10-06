import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

const items = [
  { label: "OverView", key: "overview" }, // 菜单项务必填写 key。 key也是路由路径
  { label: "Order", key: "order" ,children:[{label:"AllOrder",key:"order/allorder"},{label:"AddOrder",key:"order/addorder"}]},
  { label: "Products", key: "products" ,children:[ { label: "AddProducts", key: "products/addproducts" }]},
];
export default function VMenu() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("overview");

  const onClick = (e) => {
    console.log("click ", e.key);
    setCurrent(e.key);
    navigate(e.key);
  };
  useEffect(() => {
    navigate(current);
  }, []);
  return (
    <Menu
      theme="light"
      mode="inline"
      items={items}
      onClick={onClick}
      selectedKeys={[current]}
    />
  );
}
