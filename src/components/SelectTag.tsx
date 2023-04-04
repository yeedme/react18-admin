import { Tag } from "antd";
import React from "react";
export default function SelectTag(str:"completed" | "returnOfGoods" | "processing"){
   
    if(str==="completed"){
        return (<Tag color="blue">订单已完成</Tag>)
    }
    else if(str==="returnOfGoods"){
        return (<Tag color="red">订单退货</Tag>)
    }
    else if(str==="processing"){
        return (<Tag color="green">订单处理中</Tag>)
    }
    return (<Tag color="gray">数据错误</Tag>)
}
