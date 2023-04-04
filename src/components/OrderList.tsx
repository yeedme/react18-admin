import { Avatar, Tag } from "antd";
import React from "react";
import josh from "../assets/imgsvg/josh.svg";
import SelectTag from "./SelectTag";

type Props = {
    number:number,
    transactionStatus:"completed" | "returnOfGoods" | "processing",
    time:string
};


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
