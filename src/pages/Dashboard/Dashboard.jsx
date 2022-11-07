import React from "react";
import "./Dashboard.less";
export default function Dashboard() {
  return (
    <div className="EchatsGroup">
      <div className="Mask">
        <div className="Dashboard_FourEcharts ">
          <div className="Dashboard_FourEcharts_Echarts">
            <h2>-----</h2>
            <h2>-----</h2>
            <h2>-------------------------</h2>
          </div>
          <div className="Dashboard_FourEcharts_Echarts">
            <h2>-----</h2>
            <h2>-----</h2>
            <h2>-------------------------</h2>
          </div>{" "}
          <div className="Dashboard_FourEcharts_Echarts">
            <h2>-----</h2>
            <h2>-----</h2>
            <h2>-------------------------</h2>
          </div>{" "}
          <div className="Dashboard_FourEcharts_Echarts">
            <h2>-----</h2>
            <h2>-----</h2>
            <h2>-------------------------</h2>
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
