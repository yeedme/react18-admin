import React, { useEffect, useState } from "react";
import { Charts } from ".";
import { EChartsOption } from "echarts";

const DEFAULT_OPTIONS: EChartsOption = {
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
      data: [10, 100],
      showSymbol: false,
      type: "line",
      smooth: true,
    },
  ],
};

export default function SimpleSvgByEcharts() {
  const [open, setOpen] = useState<boolean>(false);
  const [option, setOption] = useState<EChartsOption | null>(null);
  //根据open修改视图
  useEffect(() => {
    if (open === true) {
      const options: EChartsOption = {
        ...DEFAULT_OPTIONS,
        series: [
          {
            data: [100, 200, 300, 100, 99, 10, 100, 600, 201],
            type: "line",
            smooth: true,
            areaStyle: {
    
            },
            itemStyle: {
              color: "rgba(226, 226, 226, 1)"
            }
          },
        ],
        grid: {
          top: "0%",
          bottom: "0%",
          left: "0%",
          right: "0%",
        },
        tooltip: {
          trigger: "axis",
        },
      };
      setOption(options);
    }
    //当卡片鼠标不在该卡片上的时候
    else {
      const options: EChartsOption = {
        ...DEFAULT_OPTIONS,
        series: [
          {
            data: [100, 200, 300, 100],
            showSymbol: false,
            type: "line",
            smooth: true,
          },
        ],
        grid: {
          bottom: "95%",
        },
      };
      setOption(options);
    }
  }, [open]);

  return (
    <div className=" w-full h-full  flex justify-center">
      <div
        className="relative transition-all delay-150 bg-slate-100 w-9/12 h-40 rounded-md hover:w-full hover:h-full hover:bg-slate-900 hover:text-slate-50 "
        onMouseOver={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <div className="ml-2">title</div>
        <div className="text-3xl my-2 ml-2">number</div>
        <div className={open ? " w-full h-full    " : " w-32 h-64  " + "  "}>
          {option === null ? "" : <Charts options={option} />}
        </div>
      </div>
    </div>
  );
}
