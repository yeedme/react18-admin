import React, { useEffect, useState } from "react";
import CustomerCard from "../../component/CustomerCard/CustomerCard";
import CustomerDrawContent from "../../component/CustomerCard/CustomerDrawContent";
import "./Customer.less";
import { customerGet } from "../../untils/http";
import { Drawer } from "antd";

export default function Customer() {
  const [paidData, setPaidData] = useState("");
  const [canceledData, setCanceledData] = useState("");
  const [errorData, setErrorData] = useState("");
  const customerData = async () => {
    let { paid, canceled, error } = await customerGet();
    setPaidData(paid);
    setCanceledData(canceled);
    setErrorData(error);
  };
  //获取顾客数据
  useEffect(() => {
    customerData();
  }, []);

  //控制 drawer打开和关闭；
  const [open,setOpen]=useState(false);
  const [drawerData,setDrawerData]=useState({});
  const showDrawer=(data)=>{
    setOpen(true);
    setDrawerData(data);
  }
  return (
    <>
      <div className="Customer ">
        <div className="mask">
          <Drawer title="更多信息" onClose={()=>setOpen(false)} open={open}>
                <CustomerDrawContent data={drawerData}/>
            </Drawer>
          {/* 已支付 */}
          <div>
            <CustomerCard data={paidData} status="green" showDrawer={showDrawer} />
          </div>
          {/* 异常 */}
          <div>
            <CustomerCard data={canceledData} status="red" showDrawer={showDrawer} />
          </div>
          {/* 订单取消 */}

          <div>
            <CustomerCard data={errorData} status="purple" showDrawer={showDrawer} />
          </div>
        </div>
      </div>
    </>
  );
}
