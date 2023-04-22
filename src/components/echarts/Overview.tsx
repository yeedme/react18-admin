import React, { useEffect, useState } from "react";
import { EChartsOption } from "echarts";
import { Charts } from ".";
import { axiosGetoverviweData } from "../../utils/http";
import { Cascader } from "antd";
import { Spin } from "antd";
export default function Overview() {
  const [date, setDate] = useState<string[]>([]);
  const [value, setValue] = useState<number[]>([]);
  //可视化默认现
  const DEFAULT_OPTIONS: EChartsOption = {
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
      splitLine: {
        show: false,
      },
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
  const [optionE, setOption] = useState<EChartsOption | null>(null);
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
      label: "近一年",
    },
  ];
  // 级联返回数据
  function handleCascaderChange(value: string[] |any ) {
    update(value[0]);
  }
  //向后台请求
  const update = async (string: string  | number| any ) => {
    const { LastTenDay, LastThrityDay, LastOneYear }: any =
      await axiosGetoverviweData();
    let date:number[]=LastTenDay[0].date;//日期
    let value:number[]=LastTenDay[1].value;//线条 数据  
    switch (string) {
      case "LastOneYear":
        console.log("LastOneYear");
        value=LastOneYear[1].value;
        date=LastOneYear[0].date;
        break;
      case "LastThrityDay":
        console.log("LastThrityDay");
        
        value=LastThrityDay[1].value;
        date=LastThrityDay[0].date;
        break;
      default:
        console.log("LastTenDay");
        
        value=LastTenDay[1].value;
        date=LastTenDay[0].date;
        break;
    }

    let option: EChartsOption = {
      ...DEFAULT_OPTIONS,
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: date,
      },
      series: [
        {
          data: value,
          type: "line",
          itemStyle: {
            color: "#a80000", //改变折线点的颜色
          },
        },
      ],
    };

    setOption(option);
  };
  useEffect(() => {
    update("LastTenDay");
  }, []);
 
  return (
    <div className="w-full h-full border-2 rounded-xl bg-white">
      <div className="flex justify-between px-4 pt-2">
        <h2>本季度数据总预览</h2>
        <Cascader
          options={cascaderOptions}
          onChange={handleCascaderChange}
          defaultValue={["近10天"]}
        />
      </div>
      {optionE ? 
      (<Charts options={optionE} />) : 
      (<div className="flex justify-center">
          <Spin />
        </div>
      )}
    </div>
  );
}
