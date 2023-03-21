import React, { useEffect, useState } from "react";
import { Charts } from ".";
import { EChartsOption } from "echarts";
let defalutOptions: EChartsOption = {
  xAxis: [
    {
      type: "category",
      show: false,
    },
  ],
  yAxis: [
    {
      type: "value",
      show: false,
    },
  ],
  series: [
    {
      data: [10,10],
      showSymbol: false,
      type: "line",
      smooth: true,
    },
  ],
  grid: {
    bottom: "100%",
  },
};
export default function SimpleSvgByEcharts() {
 
  const [open,setOpen]=useState<boolean>(false);
  const [option,setOption]=useState<EChartsOption | null>(null);
  useEffect(()=>{
    let t:EChartsOption=defalutOptions.series[0].data=[1,1,1]
    setOption(defalutOptions);
  },[])
  return (
    
    <>
      <div className=" w-full h-full flex justify-center ">
        <div className="transition-all delay-150 bg-slate-100 w-9/12 h-40 rounded-md hover:w-full hover:h-full hover:bg-slate-900 hover:text-slate-50 p-2"
          onMouseOver={()=>setOpen(true)}
          onMouseLeave={()=>setOpen(false)}
        >
          <div className="">title</div>
          <div className="text-3xl my-2">number</div>
          <div className="w-auto h-auto m-auto">
            <Charts options={defalutOptions} />
          </div>
        </div>
      </div>
    </>
  );
}
