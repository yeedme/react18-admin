import React from "react";
import SimpleSvgByEcharts from "../components/echarts/SimpleSvgByEcharts";
export default function Dashboard() {
  return (
    <>
      <div className="md:w-128 grid grid-cols-1 grid-rows-7 md:grid-cols-4 md:grid-rows-3 gap-4 max-w-screen-2xl" >
        <div className="h-60"><SimpleSvgByEcharts/></div>
        <div className="h-60"><SimpleSvgByEcharts/></div>
        <div className="h-60"><SimpleSvgByEcharts/></div>
        <div className="h-60"><SimpleSvgByEcharts/></div>
        <div className="bg-blue-100 md:col-span-3 ">5</div>
        <div className="bg-blue-100 md:col-span-1 md:row-span-2">6</div>
        <div className="bg-blue-100 md:col-span-3">7</div>
      </div>
    </>
  );
}
