import React,{ useState ,useRef,useEffect} from "react";
import { Select } from "antd";
import * as echarts from 'echarts/core';
import { TooltipComponent, LegendComponent } from 'echarts/components';
import { PieChart } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import './chart.less'
import { summaryDataGet } from "../../untils/http";

echarts.use([
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout
]);

export default function SummaryChart() {

  const [summaryData,SetSummyData]=useState(null);

  const option = {
    title: {
    
      left: "center",
    },
    tooltip: {
      trigger: "item",
    
    },
    legend: {
      orient: "vertical",
      left: "left",
      textStyle: { color: "#fff" },
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: summaryData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
  const handleChange = (value) => {
    getData(value)
  };

  const SummaryChart = useRef(null);
  const getData=async(type)=>{
    const { data }=await summaryDataGet(type);
   SetSummyData(data);
  }
  useEffect(()=>{
    getData('year')
  },[]);
  useEffect(()=>{
    echarts.dispose(SummaryChart.current);
    if(summaryData !== null) {
      const SChart =  echarts.init(SummaryChart.current);
      SChart.setOption(option)
    }
  },[summaryData])

  return (
    <div className="echartContent">
      <div className="option flex_JSpaceBetween_Acenter">
        订单分布图
        <div>
          <Select
            defaultValue="今年"
            style={{
              width: 120,
            }}
            onChange={handleChange}
            options={[
              {
                value: "year",
                label: "今年",
              },
              {
                value: "month",
                label: "本月",
              },
              {
                value: "week",
                label: "上周",
              },
            ]}
          />
        </div>
      </div>
      <div className="echart" ref={SummaryChart}></div>
    </div>
  );
}
