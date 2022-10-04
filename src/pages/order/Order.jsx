import React, { useState } from "react";
import OrderCard from "../../compontent/order/OrderCard";
import "./Order.css";
export default function Order() {
  const OrderCardDate = [
    {
      PaymentStatus: "paid",
      name: "LiSi",
      AvatarImg: "https://joeschmoe.io/api/v1/shou",
      OrderId: "#100-081",
      Date: "2021-1-2",
      Price: "178256",
    },
    {
      PaymentStatus: "pending",
      name: "LiHua",
      AvatarImg: "https://joeschmoe.io/api/v1/jake",
      OrderId: "#200-182",
      Date: "2021-1-2",
      Price: "178256",
    },
    
    {
      PaymentStatus: "paid",
      name: "LiHua",
      AvatarImg: "https://joeschmoe.io/api/v1/ross",
      OrderId: "#200-183",
      Date: "2021-1-2",
      Price: "178256",
    },
    
    {
      PaymentStatus: "cancelled",
      name: "Wangwu",
      AvatarImg: "https://joeschmoe.io/api/v1/Ri ",
      OrderId: "#200-184",
      Date: "2021-1-2",
      Price: "178256",
    },
  ];
  const [k]=useState(OrderCardDate);
  console.log(k);
  return (
    <div className="Order-Content">
      {k.map((t) => {
      return <OrderCard OrderCardDate={t} key={t.OrderId}/>;
      })}
    </div>
  );
}
