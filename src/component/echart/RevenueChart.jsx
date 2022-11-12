import React from "react";
import { useRef, useEffect } from "react";
import "./chart.less";
import { revenueDataGet } from "../../untils/http";
import * as echarts from "echarts/core";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from "echarts/components";
import { LineChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import { useState } from "react";
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
]);

export default function RevenueChart() {
  //三个数据 用动态修改option
  const [incomeData, setIncomeData] = useState(null);
  const [outcomeData, setOutComeData] = useState(null);
  const [date, setDate] = useState(null);
  let option = {
    title: {
      text: "Stacked Line",
      textStyle: { color: "#fff" },
    },

    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["收入", "支出"],
      textStyle: { color: "#fff" },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      color: "white",
      data: date,
      axisLine: {
        lineStyle: {
          color: "#fff",
        },
      },
    },
    yAxis: {
      type: "value",
      color: "white",
      axisLine: {
        lineStyle: {
          color: "#fff",
        },
      },
    },
    series: [
      {
        name: "收入",
        type: "line",
        data: incomeData,
        smooth: true,
        color: "#ff9090",
      },
      {
        name: "支出",
        type: "line",
        data: outcomeData,
        smooth: true,
        color: "#55e27d",
      },
    ],
  };
  //绑定dom  用于生成echart
  const Revenue = useRef(null);

//获取数据
  const getData = async (type) => {
   
    const { income, outcome, time } = await revenueDataGet(type);
    setIncomeData(income);
    setOutComeData(outcome);
    setDate(time);
  };

  //初始化获取 week.json
  useEffect(() => {
    getData("week");
  }, []);

  

  //数据变化重新渲染
  useEffect(() => {
    echarts.dispose(Revenue.current);
    if (incomeData !== null && outcomeData !== null && date !== null) {
      let ec = echarts.init(Revenue.current);
      ec.setOption(option);
    }
  }, [incomeData, outcomeData, date]);

  return (
    <div className="echartContent">
      <div className="option flex_JSpaceBetween_Acenter">
        收入数据图
        <div>
          <button
            onClick={() => {
              getData("week");
            }}
          >
            周数据
          </button>
          <button
            onClick={() => {
              getData("month");
            }}
          >
            月数据
          </button>
          <button
            onClick={() => {
              getData("year");
            }}
          >
            年数据
          </button>
        </div>
      </div>
      <div className="echart" ref={Revenue}></div>
    </div>
  );
}
