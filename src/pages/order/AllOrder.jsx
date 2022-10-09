import React, { useEffect, useState } from "react";
import OrderCard from "../../compontent/order/OrderCard";
import "./Order.css";
import { Button, Empty, Input } from "antd";
import { axiosGetOrderData } from "../../utils/http";

const { Search } = Input;
export default function AllOrder() {
  async function Getdata() {
    let result = await axiosGetOrderData();
    setOrderData(result);
    return result;
  }
  const [OrderData, setOrderData] = useState(null);
  //删除Order数据
  const DeleteOrderData = (id) => {
    const data = OrderData.filter((data) => data.OrderID !== id);

    setOrderData(data);

    console.log("删除Order数据" + OrderData);
  };

  useEffect(() => {
    Getdata();
  }, []);

  return (
    <div className="Order-Content">
      {/* -------------------AllOrder 顶部区域-------------------- ------- */}
      <div className="Order-Top">

        <h2>AllOrder </h2>

        <div className="Order-Top-options">
          <Button type="primary">Add Order</Button>
          <Search placeholder="input search text" enterButton  style={{width:'200px'}}/>
        </div>
      </div>

      {/* -------------------遍历Order Card--------------------- ------- */}
      {OrderData === null ? (
        <div style={{ width: "100%" }}>
          <Empty />
        </div>
      ) : (
        OrderData.map((t) => {
          return (
            <OrderCard
              OrderCardDate={t}
              DeleteOrderData={DeleteOrderData}
              key={t.OrderID}
            />
          );
        })
      )}
    </div>
  );
}
