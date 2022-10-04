import React, { useEffect } from "react";
import { Avatar, Tag, Card } from "antd";
import "./OrderCard.css";
import { DeleteOutlined, TableOutlined } from "@ant-design/icons";

export default function OrderCard(props) {
  const { PaymentStatus, name, AvatarImg, OrderId, Date, Price } =
    props.OrderCardDate;
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
  const OrderTopLine = (
    <div className="OrderCardTopLine">
      <div>
        <Avatar src={AvatarImg} />
        {name}
      </div>
      {CalculateTag(PaymentStatus)}
    </div>
  );
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <div className="OrderCard">
      <Card
        title={OrderTopLine}
        bordered={false}
        style={{
          width: 300,
        }}
        actions={[
          <DeleteOutlined key="delete" style={{ color: "red" }} />,
          <TableOutlined />,
        ]}
      >
        <div className="OrderCardStyle">
          <div>ORDER ID</div>
          <div>{OrderId}</div>
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
