import React,{ useState,useEffect }  from "react";
import "./Dashboard.less";
import { AppstoreOutlined,PayCircleOutlined,TeamOutlined,ProfileOutlined } from "@ant-design/icons";
import { totalDataGet } from "../../untils/http";
import RevenueChart from "../../component/echart/RevenueChart";
import SummaryChart from '../../component/echart/SummaryChart'
import RecenterCustomer from "../../component/RecentCustomer/RecenterCustomer";
import RecentComment from '../../component/RecentComment/RecentComment.jsx'
export default function Dashboard() {
  const [totalData, setTotalData] = useState({});
  //获取 Dashboard_FourEcharts的数据
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
        {/* Dashboard_FourEcharts  */}
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
                src={require("../../static/imgs/Echarts_two.png")}
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
                src={require("../../static/imgs/Echarts_three.png")}
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
                src={require("../../static/imgs/Echarts_four.png")}
                alt=""
              />{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="Mask">
        <div className="Dashboard_BigEcharts ">
          <div className="echartTypeOne"><RevenueChart/></div>
          <div className="echartTypeOne"><SummaryChart/></div>
          <div className="echartTypeTwo"><RecenterCustomer/></div>
          <div className="echartTypeThree"><RecentComment/></div>
        </div>
      </div>
    </div>
  );
}
