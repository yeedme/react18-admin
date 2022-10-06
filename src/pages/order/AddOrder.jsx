import React, { useState } from "react";
import { Avatar, Input ,Segmented} from "antd";

import { UserOutlined, PhoneOutlined,CommentOutlined } from "@ant-design/icons";
import  OrderCard from"../../compontent/order/OrderCard"
import "./AddOrder.css";
const defaultData={
  PaymentStatus:'paid',
  name:'joye',
  AvatarImg:'defaultData',
  OrderID:'defaultData',
  Data:'defaultData',
  Price:'defaultData',
  comment:'defaultData',
  phone:'defaultData',
  email:'defaultData'
}
export default function AddOrder() {
  const [OrderData,setOrderData]=useState(defaultData)
  const k=(e,type)=>{
    let value=e.target.value;
    let name=value;
    setOrderData({...OrderData,name})
   }
  return (
    <div>
      <div className="AddOrder-Avatar">
      <OrderCard OrderCardDate={OrderData}/>
      </div>

      <div className="AddOrder-Info">
        name:
        <Input prefix={<UserOutlined />} onChange	={(e)=>k(e,'name')} />
        phone:
        <Input prefix={<PhoneOutlined />} />
        email:
        <Input prefix={<CommentOutlined />} />
        PaymentStatus:
        <Segmented block options={['paid', 'pending', 'cancelled']} />

      </div>
    </div>
  );
}
