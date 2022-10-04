import React, { useEffect, useState } from "react";
import { Avatar, Tag, Card } from "antd";
import "./OrderCard.css";
import { DeleteOutlined, TableOutlined } from "@ant-design/icons";

export default function OrderCard(props) {
  const { PaymentStatus, name, AvatarImg, OrderID, Date, Price } =
    props.OrderCardDate;
    const {DeleteOrderData}=props;
    const [OrderOptionsShow,setOrderOptionsShow]=useState('none');
    const [DelateStyle,setDelateStyle]=useState('')
  //PayMentStatus有几种不同的颜色 根据PayMentStatus类型筛选颜色
  const CalculateTag = (PaymentStatus) => {
    switch (PaymentStatus) {
      case "paid":
        return <Tag color="green">{PaymentStatus}</Tag>;

      case "pending":
        return <Tag color="orange">{PaymentStatus}</Tag>;

      case "cancelled":
        return <Tag color="red">{PaymentStatus}</Tag>;

      default:
        break;
    }
  };
  const delateCard=(id)=>{
    setDelateStyle('animate__zoomOutLeft');
    //设置定时器 完成动画 
    setTimeout(() => {
      DeleteOrderData(id);
    }, 1000);
     }
  //卡片顶部 头像 名字 PaymentStatus状态
  const OrderTopLine = (
    <div className="OrderCardTopLine">
      <div>
        <Avatar src={AvatarImg} />
        {name}
      </div>
      {CalculateTag(PaymentStatus)}
    </div>
  );

  const OrderOptions = (
    <div className="OrderOptions" style={{display:OrderOptionsShow}}>
      {/*  DeleteOutlined 删除按钮 点击删除这个数据*/}
      <DeleteOutlined key="delete" style={{ color: "red", fontSize: "25px" }} onClick={()=>delateCard(OrderID)} /> 

      <TableOutlined key="details" style={{  fontSize: "25px" }} />
    </div>
  );
  useEffect(() => {
  }, 
  [OrderOptionsShow]);

  return (
    <div className={`OrderCard animate__animated ${DelateStyle}`} >
      <Card
        title={OrderTopLine}
        bordered={false}
        style={{
          width: 300,
        }}
        actions={[OrderOptions]}
        onMouseEnter={()=>setOrderOptionsShow('flex')}
        onMouseLeave={()=>setOrderOptionsShow('none')}
>
        {/* 卡片中间内容 */}
        <div className="OrderCardStyle">
          <div>ORDER ID</div>
          <div>{OrderID}</div>
        </div>
        <div className="OrderCardStyle">
          <div>DATE</div>
          <div>{Date}</div>
        </div>
        <div className="OrderCardStyle">
          <div>Price</div>
          <div>{Price}</div>
        </div>
      </Card>
    </div>
  );
}
