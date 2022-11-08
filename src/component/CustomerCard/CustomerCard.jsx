import React from "react";
import { Avatar, Tag,Popconfirm ,message} from "antd";
import {
  DeleteOutlined,SmallDashOutlined
} from '@ant-design/icons';
import "./CustomerCard.less";
import { useState } from "react";

export default function CustomerCard(props) {
  const {status,data}=props;
  const CustomerStatus = () => {
    return (
      <div className="CustomerStatus flex_JSpaceBetween_Acenter">
        <div className="flex_JSpaceBetween_Acenter ">
          <div className={`circle ${status}`} />
          {status==='green'?"已支付":status==='red'?'已退款':'订单异常'}
        </div>
        <div>{data.length}人</div>
      </div>
    );
  };
  //跟据payment 生成对应颜色的标签
  const switchTag = (data) => {
    switch (data) {
      case "paid":
        return <Tag color="green">已支付</Tag>;

      case "canceled":
        return <Tag color="red">退款</Tag>;

      default:
        return <Tag color="purple">异常</Tag>;
    }
  };
  //鼠标移动到卡片上时 会生成option (删除和更多信息)
  const [optionShow,setOptinShow]=useState('none');
  //删除确认
  const confirm=()=>{
    message.success('删除成功');
  }

  return (
    <>
     <CustomerStatus paystatus={"green"} />
     {/* data默认是'' 长度0 没有数据的时候不渲染子组件 */}
     {data.length==0?"":
      data.map((t,index) => {
        return (
          <div key={index} className="CustomerCard flex_Jcenter_Acenter flexDirection_column" onMouseEnter={()=>{
            setOptinShow('flex')
          }}  onMouseLeave={()=>{setOptinShow('none')}}>
            <div className="flex_JSpaceBetween_Acenter content">
              <div>
                <Avatar src={`https://joeschmoe.io/api/v1/${t.name}`} />
                {t.name}
              </div>
              <div>{switchTag(t.paystatus)}</div>
            </div>

            {/* order */}
            <div className="flex_JSpaceBetween_Acenter content">
              <div>Order</div>
              <div>{t.oderId}</div>
            </div>
            {/* price */}
            <div className="flex_JSpaceBetween_Acenter content">
              <div>price</div>
              <div>{t.price}</div>
            </div>
            {/* date */}
            <div className="flex_JSpaceBetween_Acenter content">
              <div>date</div>
              <div>{t.date}</div>
            </div>
            {/* payment */}
            <div className="flex_JSpaceBetween_Acenter content">
              <div>payment</div>
              <div>{t.payment}</div>
            </div>
            <div className="options flex_JSpaceBetween_Acenter" > 
            <Popconfirm okText="确认" onConfirm={confirm}  cancelText="取消"  title="确认此信息？" >
            <DeleteOutlined  className="icon" style={{display:optionShow}} />
            </Popconfirm>
            <SmallDashOutlined className='icon' style={{display:optionShow}} />          
            </div>
          </div>
        );
      })}
    </>
  );
}
