import React, { useState } from "react";
import { Avatar, Input, Segmented, InputNumber, DatePicker } from "antd";

import {
  UserOutlined,
  PhoneOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import OrderCard from "../../compontent/order/OrderCard";
import "./AddOrder.css";
//默认数据便于展示
const defaultData = {
  PaymentStatus: "paid",
  name: "joye",
  AvatarImg: "defaultData",
  OrderID: "defaultData",
  Date: "defaultData",
  Price: "defaultData",
  comment: "defaultData",
  phone: "defaultData",
  email: "defaultData",
};
export default function AddOrder() {
  const [OrderData, setOrderData] = useState(defaultData);
  return (
  <div>
    <h2>AddOrder</h2>
    <p>Here can push your information  .
      And review Card</p>
      <div className="AddOrder">
        
 {/* ------------------预览 卡片信息 ------- */}
      <div className="AddOrder-Avatar">
        <OrderCard OrderCardDate={OrderData} />
      </div>

      <div className="AddOrder-Info">


  {/* ----------------------------OrderId-------------- */}
        OrderId:
        <Input
          prefix={<UserOutlined />}
          size="large"
          onChange={(e) => {
            setOrderData({ ...OrderData, OrderID: e.target.value });
          }}
        />

    {/* ----------------------------OrderId-------------- */}
        name:
        <Input
          prefix={<UserOutlined />}
          size="large"
          onChange={(e) => {
            setOrderData({ ...OrderData, name: e.target.value });
          }}
        />


   {/* ----------------------------phone-------------- */}
        phone:
        <Input
          prefix={<PhoneOutlined />}
          size="large"
          onChange={(e) => {
            setOrderData({ ...OrderData, phone: e.target.value });
          }}
        />


   {/* ----------------------------email-----------0---------- */}
        email:
        <Input
          prefix={<CommentOutlined />}
          size="large"
          onChange={(e) => {
            setOrderData({ ...OrderData, email: e.target.value });
          }}
        />


  {/* -------------PaymentStatus-------------------- */}
        PaymentStatus:
        <Segmented
          size="large"
          block
          options={["paid", "pending", "cancelled"]}
          onChange={(value) => {
            setOrderData({ ...OrderData, PaymentStatus: value });
          }}
        />


      {/* ----------------------------price--------------------- */}
            price:
        <div className="AddOrder-options">  
          <br />
          <InputNumber
            min={0}
            defaultValue={10}
            onChange={(value) => {
              setOrderData({ ...OrderData, Price: value });
            }}
            className="AddOrder-compontent"
          />       
        </div>


    {/* ----------------------------Date------------------------- */}
        <div className="AddOrder-options">
          Date : <br />
          <DatePicker
            onChange={(date, dateString) => {
              setOrderData({ ...OrderData, Date: dateString });
            }}
            className="AddOrder-compontent"
          />
        </div>

    {/* ----------------------------Comment------------------------- */}
        <div className="AddOrder-options">
          Comment :<br />
          <textarea className="AddOrder-TextArea"></textarea>
        </div>

      </div>
      </div>
    </div>    
  );
}
