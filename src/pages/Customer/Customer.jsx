import React from "react";
import CustomerCard from "../../component/CustomerCard/CustomerCard";
import "./Customer.less";
import { customerGet } from "../../untils/http";
import { useEffect } from "react";
import { useState } from "react";
export default function Customer() {

  const [paidData, setPaidData] = useState('');
  const [canceledData, setCanceledData] = useState('');
  const [errorData, setErrorData] = useState('');
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
  return (
    <>
      <div className="Customer ">
        <div className="mask">
          {/* 已支付 */}
          <div>
            <CustomerCard data={paidData} status="green"/>
          </div>
          {/* 异常 */}
          <div>
          <CustomerCard data={canceledData} status="red"/>
          </div>
          {/* 订单取消 */}
           <div>
              <CustomerCard data={errorData} status="purple"/>
            </div> 
        </div>
      </div>
    </>
  );
}
