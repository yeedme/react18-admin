import React, { useEffect, useState } from 'react'
import { Drawer  } from 'antd'
interface Props {
    showDrawer: () => void;
    isOpen: boolean;
    orderId:React.Key | null
  }
export default function OrderDraw(props: Props)  {
    useEffect(()=>{

        console.log(props.orderId);
        
    },[props.orderId])
  return (
    <Drawer title="Basic Drawer" placement="right" onClose={props.showDrawer} open={props.isOpen}>
    <p>{props.orderId}</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </Drawer>
  )
}