import React, { useEffect, useState } from "react";
import OrderCard from "../../compontent/order/OrderCard";
import "./Order.css";
import {axiosGetOrderData} from "../../utils/http"
export default function Order() {
  const OrderCardDate = [
    {
      PaymentStatus: "paid",
      name: "LiSi",
      AvatarImg: "https://joeschmoe.io/api/v1/shou",
      OrderID: "#100-081",
      Date: "2021-1-2",
      Price: "178256",
    },
    {
      PaymentStatus: "pending",
      name: "LiHua",
      AvatarImg: "https://joeschmoe.io/api/v1/jake",
      OrderID: "#200-182",
      Date: "2021-1-2",
      Price: "178256",
    },
    
    {
      PaymentStatus: "paid",
      name: "LiHua",
      AvatarImg: "https://joeschmoe.io/api/v1/ross",
      OrderID: "#200-183",
      Date: "2021-1-2",
      Price: "178256",
    },
    
    {
      PaymentStatus: "cancelled",
      name: "Wangwu",
      AvatarImg: "https://joeschmoe.io/api/v1/Ri ",
      OrderID: "#200-184",
      Date: "2021-1-2",
      Price: "178256",
    },
  ];
  async function Getdata(){
    let result=await axiosGetOrderData();
    setOrderData(result);
    return result;
  } 
  const [OrderData,setOrderData]=useState(OrderCardDate);
  //删除Order数据 
  const DeleteOrderData=(id)=>{
    console.log(id);
    const data=OrderCardDate.filter(data=>data.OrderID!==id);
    console.log(data);
    setOrderData(data)
   
  }
  
  useEffect(()=>{
    console.log("now:"+OrderData);
  },[OrderData])
  return (
    <div className="Order-Content">
      {OrderData.map((t) => {
      return <OrderCard OrderCardDate={t} DeleteOrderData={DeleteOrderData} key={t.OrderID}/>;
      })}
    </div>
  );
}
