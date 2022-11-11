import React from "react";
import "./Dashboard.less";
import { AppstoreOutlined,PayCircleOutlined,TeamOutlined,ProfileOutlined } from "@ant-design/icons";
import { totalDataGet } from "../../untils/http";
import { useEffect } from "react";
import { useState } from "react";
export default function Dashboard() {
  const [totalData, setTotalData] = useState({});
  const axiosTotalData = async () => {
    const data = await totalDataGet();
    setTotalData(data);
  };
  useEffect(() => {
    axiosTotalData();
  }, []);
  return (
    <div className="EchatsGroup">
      <div className="Mask">
        <div className="Dashboard_FourEcharts ">
          {/* 总收入 */}
          <div className="Dashboard_FourEcharts_Echarts">
            <div className="flex_JSpaceBetween_Acenter">
              <h2>总收入</h2>
              <AppstoreOutlined className="icon" />
            </div>
            <h1>{totalData.incomevalue}</h1>
            <div className="flex_JSpaceBetween_AflexEnd">
              <p>{totalData.incometrend}(30天)</p>
              <img
                src={require("../../static/imgs/Echarts_one.png")}
                alt=""
              />{" "}
            </div>
          </div>
          {/* 总支出 */}
          <div className="Dashboard_FourEcharts_Echarts">
            <div className="flex_JSpaceBetween_Acenter">
              <h2>总支出</h2>
              <PayCircleOutlined  className="icon" />
            </div>
            <h1>{totalData.outcomevalue}</h1>
            <div className="flex_JSpaceBetween_AflexEnd">
              <p>{totalData.outcometrend}(30天)</p>
              <img
                src={require("../../static/imgs/Echarts_one.png")}
                alt=""
              />{" "}
            </div>
          </div>
           {/* 订单数 */}
          <div className="Dashboard_FourEcharts_Echarts">
            <div className="flex_JSpaceBetween_Acenter">
              <h2>订单数</h2>
              <ProfileOutlined className="icon" />
            </div>
            <h1>{totalData.ordervalue}</h1>
            <div className="flex_JSpaceBetween_AflexEnd">
              <p>{totalData.ordertrend}(30天)</p>
              <img
                src={require("../../static/imgs/Echarts_one.png")}
                alt=""
              />{" "}
            </div>
          </div>
           {/* 顾客总数 */}
          <div className="Dashboard_FourEcharts_Echarts">
            <div className="flex_JSpaceBetween_Acenter">
              <h2>顾客总数</h2>
              <TeamOutlined   className="icon" />
            </div>
            <h1>{totalData.customervalue}</h1>
            <div className="flex_JSpaceBetween_AflexEnd">
              <p>{totalData.customertrend}(30天)</p>
              <img
                src={require("../../static/imgs/Echarts_one.png")}
                alt=""
              />{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="Mask">
        <div className="Dashboard_BigEcharts ">
          <div className="echartTypeOne"></div>
          <div className="echartTypeOne"></div>
          <div className="echartTypeTwo"></div>
          <div className="echartTypeThree"></div>
        </div>
      </div>
    </div>
  );
}
