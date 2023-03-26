import React, { useEffect } from "react";
import { EChartsOption } from "echarts";
import { Charts } from ".";
import { axiosGetoverviweData } from "../../utils/http";
import { Cascader } from "antd";
export default function Overview() {
  //可视化默认现
  const DEFAULT_OPTIONS: EChartsOption = {
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
      splitLine:{
        show:false
      }
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        itemStyle: {
          color: "#a80000", //改变折线点的颜色
        },
       
      },
    ],
    grid: {
      top: 60,
      bottom: 80,
      left: 50,
      right: 20,
    },
  };


  //级联可选项
  const cascaderOptions = [
    {
      value: "LastTenDay",
      label: "近10天",
    },
    {
      value: "LastThrityDay",
      label: "近30天",
    },
    {
      value: "LastOneYear",
      label: "近一年"
    },

  ];
    // 级联返回数据
  function handleCascaderChange(value: string[] | number[] | any){

  }
  useEffect(()=>{
    axiosGetoverviweData();
  },[])
  return (
    <div className="w-full h-full border-2 rounded-xl">
      <div className="flex justify-between px-4 pt-2">
        <h2>本季度数据总预览</h2>
        <Cascader options={cascaderOptions} onChange={handleCascaderChange} defaultValue={['近10天']} />
      </div>
      <Charts options={DEFAULT_OPTIONS} />
    </div>
  );
}
