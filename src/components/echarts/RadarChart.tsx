import React from "react";
import { Charts } from ".";
import { EChartsOption } from "echarts";
export default function RadarChart() {
  const DEFAULT_OPTIONS:EChartsOption = {

  legend: {
    data: ['已分配预算', '实际花费']
  },
  radar: {
    // shape: 'circle',
    indicator: [
      { name: '销售额', max: 6500 },
      { name: '管理', max: 16000 },
      { name: '信息技术', max: 30000 },
      { name: '客户支持', max: 38000 },
      { name: '发展', max: 52000 },
      { name: '促销', max: 25000 }
    ]
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      data: [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
          name: '已分配预算'
        },
        {
          value: [5000, 14000, 28000, 26000, 42000, 21000],
          name: '实际花费'
        }
      ]
    }
  ]
  };
  return(
<Charts options={DEFAULT_OPTIONS} />
  ) 
}
