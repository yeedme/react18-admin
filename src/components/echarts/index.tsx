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
    // chart?.resize();
  };
  //初始化
  const initChart = () => {
    if (chart!==null ||  chart != " " || chart!=undefined) {
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

