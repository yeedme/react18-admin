import React from 'react'
import { RiseOutlined,FallOutlined } from '@ant-design/icons'
import  './DataCardItem.css'
export default function DataCardItem(props) {
    const {title,number,trend,data,detail}=props.CardItemTestData;
    const rise=( <RiseOutlined style={{color:'rgb(113, 219, 113)'}} />)//数据趋势 处于上升
    const fall=( <FallOutlined style={{color:'red'}}/>)//数据趋势 处于下降
  return (
    <div className='DataCard'>
        <div className='title'> {title}</div>
        <h2 className='number'>{number}</h2>
        {/* 判断数据趋势是否上升 */}
        <div className='details'>{trend==='rise'?rise:fall} {data} {detail}</div>
    </div>
  )
}
