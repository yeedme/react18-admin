import React from "react";
import "./RecenterCustomer.less";
import * as echarts from "echarts/core";
import {
  TitleComponent,
  SingleAxisComponent,
  TooltipComponent,
} from "echarts/components";
import { ScatterChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import { useRef } from "react";
import { useEffect } from "react";

echarts.use([
  TitleComponent,
  SingleAxisComponent,
  TooltipComponent,
  ScatterChart,
  CanvasRenderer,
  UniversalTransition,
]);
const data = [
  [0, 0, 5],
  [0, 1, 1],
  [0, 2, 0],
  [0, 3, 0],
  [0, 4, 0],
  [0, 5, 0],
  [0, 6, 0],
  [0, 7, 0],
  [0, 8, 0],
  [0, 9, 0],
  [0, 10, 0],
  [0, 11, 2],
  [0, 12, 4],
  [0, 13, 1],
  [0, 14, 1],
  [0, 15, 3],
  [0, 16, 4],
  [0, 17, 6],
  [0, 18, 4],
  [0, 19, 4],
  [0, 20, 3],
  [0, 21, 3],
  [0, 22, 2],
  [0, 23, 5],
  [1, 0, 7],
  [1, 1, 0],
  [1, 2, 0],
  [1, 3, 0],
  [1, 4, 0],
  [1, 5, 0],
  [1, 6, 0],
  [1, 7, 0],
  [1, 8, 0],
  [1, 9, 0],
  [1, 10, 5],
  [1, 11, 2],
  [1, 12, 2],
  [1, 13, 6],
  [1, 14, 9],
  [1, 15, 11],
  [1, 16, 6],
  [1, 17, 7],
  [1, 18, 8],
  [1, 19, 12],
  [1, 20, 5],
  [1, 21, 5],
  [1, 22, 7],
  [1, 23, 2],
  [2, 0, 1],
  [2, 1, 1],
  [2, 2, 0],
  [2, 3, 0],
  [2, 4, 0],
  [2, 5, 0],
  [2, 6, 0],
  [2, 7, 0],
  [2, 8, 0],
  [2, 9, 0],
  [2, 10, 3],
  [2, 11, 2],
  [2, 12, 1],
  [2, 13, 9],
  [2, 14, 8],
  [2, 15, 10],
  [2, 16, 6],
  [2, 17, 5],
  [2, 18, 5],
  [2, 19, 5],
  [2, 20, 7],
  [2, 21, 4],
  [2, 22, 2],
  [2, 23, 4],
  [3, 0, 7],
  [3, 1, 3],
  [3, 2, 0],
  [3, 3, 0],
  [3, 4, 0],
  [3, 5, 0],
  [3, 6, 0],
  [3, 7, 0],
  [3, 8, 1],
  [3, 9, 0],
  [3, 10, 5],
  [3, 11, 4],
  [3, 12, 7],
  [3, 13, 14],
  [3, 14, 13],
  [3, 15, 12],
  [3, 16, 9],
  [3, 17, 5],
  [3, 18, 5],
  [3, 19, 10],
  [3, 20, 6],
  [3, 21, 4],
  [3, 22, 4],
  [3, 23, 1],
  [4, 0, 1],
  [4, 1, 3],
  [4, 2, 0],
  [4, 3, 0],
  [4, 4, 0],
  [4, 5, 1],
  [4, 6, 0],
  [4, 7, 0],
  [4, 8, 0],
  [4, 9, 2],
  [4, 10, 4],
  [4, 11, 4],
  [4, 12, 2],
  [4, 13, 4],
  [4, 14, 4],
  [4, 15, 14],
  [4, 16, 12],
  [4, 17, 1],
  [4, 18, 8],
  [4, 19, 5],
  [4, 20, 3],
  [4, 21, 7],
  [4, 22, 3],
  [4, 23, 0],
  [5, 0, 2],
  [5, 1, 1],
  [5, 2, 0],
  [5, 3, 3],
  [5, 4, 0],
  [5, 5, 0],
  [5, 6, 0],
  [5, 7, 0],
  [5, 8, 2],
  [5, 9, 0],
  [5, 10, 4],
  [5, 11, 1],
  [5, 12, 5],
  [5, 13, 10],
  [5, 14, 5],
  [5, 15, 7],
  [5, 16, 11],
  [5, 17, 6],
  [5, 18, 0],
  [5, 19, 5],
  [5, 20, 3],
  [5, 21, 4],
  [5, 22, 2],
  [5, 23, 0],
  [6, 0, 1],
  [6, 1, 0],
  [6, 2, 0],
  [6, 3, 0],
  [6, 4, 0],
  [6, 5, 0],
  [6, 6, 0],
  [6, 7, 0],
  [6, 8, 0],
  [6, 9, 0],
  [6, 10, 1],
  [6, 11, 0],
  [6, 12, 2],
  [6, 13, 1],
  [6, 14, 3],
  [6, 15, 4],
  [6, 16, 0],
  [6, 17, 0],
  [6, 18, 0],
  [6, 19, 0],
  [6, 20, 1],
  [6, 21, 2],
  [6, 22, 2],
  [6, 23, 6],
];
const hours = [
  '0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00',
  '7:00', '8:00', '9:00', '10:00', '11:00',
  '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
  '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'
];
// prettier-ignore
const days = [
  '周一', '周二', '周三',
  '周四', '周五', '周六', '周日'
];
export default function RecenterCustomer() {
  const RecenterCustomerRef = useRef(null);
  const title = [];
  const singleAxis = [];
  const series = [];
  days.forEach(function (day, idx) {
    title.push({
      textBaseline: "middle",
      top: ((idx + 0.5) * 100) / 7 + "%",
      text: day,
      textStyle:{
        color:"#fff"
      }
    });
    singleAxis.push({
      left: 100,
      type: "category",
      boundaryGap: false,
      data: hours,
      top: (idx * 100) / 7 + 5 + "%",
      height: 100 / 7 - 10 + "%",
      axisLabel: {
        interval: 2,
      },    axisLine: {
        lineStyle: {
          color: "#fff",
        },
      },
    });
    series.push({
      singleAxisIndex: idx,
      coordinateSystem: "singleAxis",
      type: "scatter",
      data: [],
      symbolSize: function (dataItem) {
        return dataItem[1] * 4;
      },
      
    });
  });
  data.forEach(function (dataItem) {
    series[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
  });
  let option = {
    tooltip: {
      position: "top",
    },
    title: title,
    singleAxis: singleAxis,
    series: series,
  };
  useEffect(() => {
     let RecenterCustomerChart=echarts.init(RecenterCustomerRef.current);
      RecenterCustomerChart.setOption(option)
  }, []);
  return (
    <div className="RecenterCustomer">
      <div className="flex_JSpaceBetween_Acenter ">
        订单来源
        <div>
          <button>添加顾客</button>
          <button>查看更多</button>
        </div>
      </div> 
      <div className="content" ref={RecenterCustomerRef}></div>
    </div>
  );
}
