import React from 'react'
import { RiseOutlined,FallOutlined } from '@ant-design/icons'
export default function DataCardItem(props) {
    const {title,number,trend,data}=props.CardItemTestData;
    console.log(props.CardItemTestData);
    const rise=( <RiseOutlined style={{color:'green'}}/>)//数据趋势 处于上升
    const fall=( <FallOutlined style={{color:'red'}}/>)//数据趋势 处于下降
  return (
    <div className='DataCard'>
        <div className='title'> {title}</div>
        <h2 className='number'>{number}</h2>
        {/* 判断数据趋势是否上升 */}
        <div className='details'>{trend==='rise'?rise:fall} {data} </div>
    </div>
  )
}
