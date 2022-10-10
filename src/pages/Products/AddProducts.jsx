import React, { useState } from "react";
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Select, Steps } from "antd";
import "./AddProducts.css"
// 添加产品页面 
const steps = [
  {
    title: 'First',
    content: 'First-content',
  },
  {
    title: 'Second',
    content: 'Second-content',
  },
  {
    title: 'Last',
    content: 'Last-content',
  },
];
const { Option } = Select;
const { Step } = Steps;

export default function AddProducts() {


  const [current,setCurrent]=useState(1);
  return (
    <div className="AddProducts-Content">
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>

      <div className="Steps-Content">

      </div>

        <div>
          <Button type="primary">push</Button>
        </div>
    </div>
  )
}
