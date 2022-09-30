
import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import Overview from "../../pages/overview/Overview";

const items = [
    { label: 'OverView', key: 'overview',}, // 菜单项务必填写 key
    { label: 'Order', key: 'order',},
  ];
export default function VMenu() {
  const navigate=useNavigate ();
  const [current, setCurrent] = useState('overview');

  const onClick = (e) => {
    console.log('click ',e.key);
    setCurrent(e.key)
    navigate(e.key);
    

  };
  useEffect(()=>{
    console.log('hhh');
    navigate(current);
  },[])
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
