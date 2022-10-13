import React, { useState, useRef, useEffect } from 'react'
import * as echarts from 'echarts';
let options= {
    xAxis: {
        type: 'category',
        data: ['Mon111111', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [82, 93, 901, 93, 12, 1330, 13],
        type: 'line'
    }]
}
export default function Echart() {
    let o= {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
        }]
    }

    //初始化数据 保存在 useState 里面
    const [option,setOption]=useState(o)

    //绑定ref
    const echartRef=useRef(null);
//echarts 初始化
 useEffect(()=>{
    const myechart=echarts.init(echartRef.current);
    option && myechart.setOption(option);
    setTimeout(() => {
        setOption(options)
        console.log("timeout ");
    }, 5000);
 },[]);
 //监听 option 当Option 变化重新渲染 图表
 useEffect(()=>{
    const myechart=echarts.init(echartRef.current);
    option&&myechart.setOption(option);
 },[option])
  return (
    <div  ref={echartRef} style={{width:'400px',height:'400px'}}>
    </div>
  )
}
