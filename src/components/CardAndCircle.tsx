import React from 'react'
import { Progress } from 'antd'
interface propsType{
    title:string,
    maxNum:number,
    perecent:number,
    currentNum:number
}
export default function CardAndCircle(props:propsType) {
  return (
 
        <div className='mt-2 w-full h-36  flex justify-between items-center  p-2 rounded-xl border-slate-300 border-2'>
            <div>
                <div>{props.title}</div>
                <div>最多：{props.maxNum}</div>
            </div>
            <div>
            <Progress type="circle" percent={props.perecent}  />
            </div>
            <div className='text-4xl'>
                {props.currentNum}
            </div>
     
    </div>
  )
}
