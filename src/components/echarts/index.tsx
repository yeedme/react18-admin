import React, { useEffect, useRef, useState } from 'react';
import type { EChartsOption, ECharts } from 'echarts'; // import only EChartsOption and ECharts types

import * as echarts from 'echarts';

type BaseChartProps ={
  options: EChartsOption
};

const Charts: React.FC<BaseChartProps> = ( { options }) => {
  const chartRef = useRef<HTMLInputElement> (null);
  const [chart, setChart] = useState<ECharts> ();
  //响应式
  const handleResize = () => {
    chart?.resize();
  };
  //初始化
  const initChart = () => {
    if (chart) {
      window.removeEventListener("resize", handleResize);
      chart?.dispose();
    }
    const newChart = echarts?.init(chartRef?.current as HTMLElement);
    newChart.setOption(options, true);
    window.addEventListener("resize", handleResize);
    setChart(newChart);
  };
  //
  useEffect( () => {
    initChart();
  }, [options])
  return <div ref={chartRef} style={ { height: "100%", width: "100%" }} />
};

export {Charts};


// import React, {useEffect, useState} from "react";
// import {EChartOption} from "echarts";
// import {Charts} from "./Echarts";

// const App:React.FC= ()=> {
//  let [options, setOptions] = useState<EChartOption> ( {})

//  useEffect ( ()=> {

//  setOptions ( {
//  tooltip: {
//  trigger: 'item'
//  },
//  legend: {
//  top: '5%',
//  left: 'center'
//  },
//  series: [
//  {
//  name: 'Access From',
//  type: 'pie',
//  radius: ['40%', '70%'],
//  avoidLabelOverlap: false,
//  itemStyle: {
//  borderRadius: 10,
//  borderColor: '#fff',
//  borderWidth: 2
//  },
//  label: {
//  show: false,
//  position: 'center'
//  },
//  emphasis: {
//  label: {
//  show: true,
//  fontSize: 40,
//  fontWeight: 'bold'
//  }
//  },
//  labelLine: {
//  show: false
//  },
//  data: [
//  {value: 1048, name:'Search Engine'},
//  {value :735,name:'Direct'},
// {value :580,name:'Email'},
// {value :484,name:'Union Ads'},
// {value :300,name:'Video Ads'}
//  ]
//  }
//  ]
//  })

//  }, [])
//  return (
//  <Charts options= {options} />
//  )
// }
// export default App;