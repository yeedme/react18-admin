import { Avatar, Tag } from "antd";
import React, { useState } from "react";
import josh from "../assets/imgsvg/josh.svg";


type Props = {
    number:number,
    transactionStatus:"completed" | "returnOfGoods" | "processing",
    time:string
};
function SelectTag(str:"completed" | "returnOfGoods" | "processing"){
   
    if(str==="completed"){
        return (<Tag color="blue">订单已完成</Tag>)
    }
    else if(str==="returnOfGoods"){
        return (<Tag color="red">订单退货</Tag>)
    }
    else if(str==="processing"){
        return (<Tag color="green">订单处理中</Tag>)
    }
    return (<Tag color="gray">数据错误</Tag>)
}
export default function OrderList(props: Props) {
  return (
    <>
      <div className="w-full flex justify-between items-center p-4 border-b-2 hover:bg-gray-100">
        <Avatar src={josh} />
        <h2>{props.number}</h2>
        {
            SelectTag(props.transactionStatus)
        }
        <h2>{props.time}</h2>
      </div>
    </>
  );
}
