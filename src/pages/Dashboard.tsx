import React, { useEffect, useState } from "react";
import SimpleSvgByEcharts from "../components/echarts/SimpleSvgByEcharts";
import { axiosGetChartOne } from "../utils/http";
import Overview from "../components/echarts/Overview";
import RadarChart from "../components/echarts/RadarChart";
import CardAndCircle from "../components/CardAndCircle";
export default function Dashboard() {
  const color = ["#ff7875", "#ffd666", "#743787", "#436b75"];
  const [chartDataOne, setChartDataOne] = useState<[] | null>(null);
  //偷个懒不用json数据
  const cardAndCircleData = [
    {
      title: "在线人数",
      maxNum: 712,
      perecent: 62,
      currentNum: 71,
    },
    {
      title: "在线人数",
      maxNum: 712,
      perecent: 62,
      currentNum: 71,
    },
  ];
  const getDataOne = async () => {
    let data: any = await axiosGetChartOne();
    setChartDataOne(data);
  };
  useEffect(() => {
    getDataOne();
  }, []);

  return (
    <>
      <div className="md:w-128 grid grid-cols-1 grid-rows-7 md:grid-cols-4 md:grid-rows-3 gap-4 max-w-screen-2xl">
        {chartDataOne != null
          ? chartDataOne.map((t: any, index) => {
              return (
                <div className="h-60" key={index}>
                  <SimpleSvgByEcharts
                    title={t.title}
                    datas={t.data}
                    simpleDatas={t.trendData}
                    trend={t.trend}
                    color={color[index]}
                  />
                </div>
              );
            })
          : ""}
        <div className=" md:col-span-3 h-60 ">
          <Overview />
        </div>
        <div className=" md:col-span-1 md:row-span-2 bg-blue-100">
          <div className="w-full h-full">

            <div className="w-full h-80">
            <RadarChart />
            </div>
        
          {
            cardAndCircleData.map((t,index)=>{
              return (
                <CardAndCircle key={index} title={t.title} maxNum={t.maxNum} perecent={t.perecent} currentNum={t.currentNum}/>
              )
            })
          }
                </div>
        </div>
        <div className="bg-blue-100 md:col-span-3">7</div>
      </div>
    </>
  );
}
