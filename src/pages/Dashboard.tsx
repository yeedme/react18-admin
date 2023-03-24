import React, { useEffect, useState } from "react";
import SimpleSvgByEcharts from "../components/echarts/SimpleSvgByEcharts";
import { axiosGetChartOne } from "../utils/http";
import Overview from "../components/echarts/Overview";
import RadarChart from "../components/echarts/RadarChart";
export default function Dashboard() {
  const [chartDataOne, setChartDataOne] = useState<[] | null>(null);
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
          ? chartDataOne.map((t:any, index) => {
              return (
                <div className="h-60" key={index}>
                  <SimpleSvgByEcharts title={t.title} datas={t.data} simpleDatas={t.trendData} trend={t.trend}/>
                </div>
              );
            })
          : ""}
        <div className="bg-blue-100 md:col-span-3 h-60 ">
          <Overview/>
        </div>
        <div className="bg-blue-100 md:col-span-1 md:row-span-2"><RadarChart/></div>
        <div className="bg-blue-100 md:col-span-3">7</div>
      </div>
    </>
  );
}
