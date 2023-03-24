import React from 'react'
import { EChartsOption } from "echarts";
import { Charts } from '.';
import Ycascadern from '../Ycascadern';


export default function Overview() {
  //可视化默认现
  const DEFAULT_OPTIONS: EChartsOption = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {}
      }
    ],
    grid:{
      top:60,
      bottom:60,
      left:50,
      right:20,
    }
    };
    // 级联返回起
  const handleCascaderChange = (value: string[] | number[]) => {
    // 处理级联选择器变化的逻辑
  };
  //级联可选项
  const cascaderOptions = [
    {
      value: '1',
      label: 'Option 1',
      children: [
        {
          value: '2',
          label: 'Option 1-1'
        }
      ]
    }
  ];
  return (
    <div className='w-full h-full'>
      <div className='flex justify-between px-4 pt-2'>
        <h2>title</h2>
        <Ycascadern op={cascaderOptions} onChange={handleCascaderChange} />
      </div>
      <Charts options={DEFAULT_OPTIONS}/>
    </div>
  )
}

