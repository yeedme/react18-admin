import React, { useEffect, useState } from "react";
import {
  Avatar,
  Tag,
  Card,
  Popconfirm,
  message,
  Drawer,
  Descriptions,
} from "antd";
import "./OrderCard.css";
import {
  DeleteOutlined,
  TableOutlined,
} from "@ant-design/icons";
import CommentReply from "../comment/CommentReply";
export default function OrderCard(props) {
  const { PaymentStatus, name, AvatarImg, OrderID, Date, Price ,comment,phone,email} =
    props.OrderCardDate;
  const { DeleteOrderData } = props;
  const [OrderOptionsShow, setOrderOptionsShow] = useState("none");
  const [DelateStyle, setDelateStyle] = useState("");

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
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
    console.log("showDrawer");
  };

  const onClose = () => {
    setOpen(false);
  };

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

  const onConfirm = (id) => {
    setDelateStyle("animate__zoomOutLeft");
    message.success(`id:${id} delated`);
    //设置定时器 完成动画后执行删除数据的函数
    setTimeout(() => {
      DeleteOrderData(id);
    }, 1000);
  };
  const onCancel = () => {
    message.success(`delate error`);
  };
  //删除按钮 位于oderCard底部操作区
  const Delete = (
    <Popconfirm
      title="Are you sure to delate this "
      onConfirm={() => onConfirm(OrderID)}
      onCancel={onCancel}
    >
      <DeleteOutlined key="delete" style={{ color: "red", fontSize: "25px" }} />
    </Popconfirm>
  );

  //oderCard底部操作区
  const OrderOptions = (
    <div className="OrderOptions" style={{ display: OrderOptionsShow }}>
      {/*  DeleteOutlined 删除按钮 点击删除这个数据*/}
      {Delete}
      <TableOutlined
        key="details"
        style={{ fontSize: "25px" }}
        onClick={showDrawer}
      />
    </div>
  );

        {/*------------ 个人信息----------- */}
  const OrderInfo = (
    <Descriptions title="User Info">
      <Descriptions.Item label="UserName">{name}</Descriptions.Item>
      <Descriptions.Item label="Telephone">{phone}</Descriptions.Item>
      <Descriptions.Item label="OrderID:">{OrderID}</Descriptions.Item>
      <Descriptions.Item label="PayMent"> {CalculateTag(PaymentStatus)}</Descriptions.Item>
      <Descriptions.Item label="email">{email}</Descriptions.Item>
    </Descriptions>
  );

  useEffect(() => {}, [OrderOptionsShow]);

  return (
    <div className={`OrderCard animate__animated ${DelateStyle}`}>
      <Card
        title={OrderTopLine}
        bordered={false}
        style={{
          width: 300,
        }}
        actions={[OrderOptions]}
        onMouseEnter={() => setOrderOptionsShow("flex")}
        onMouseLeave={() => setOrderOptionsShow("none")}
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

{/* ------------抽屉------- */}
      <Drawer
        title="details"
        placement="top"
        onClose={onClose}
        open={open}
      >


        {/*------------ 个人信息----------- */}
        {OrderInfo}


        {/*------------ 评论区---------- */}
        <CommentReply name={name} comment={comment} AvatarImg={AvatarImg}/>
      </Drawer>
    </div>
  );
}
