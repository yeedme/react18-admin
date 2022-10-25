import React, { useState } from "react";
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import Verification from "../../compontent/verification/Verification";
import PayContent from "../../compontent/Pay/PayContent";
import { Button, Select, Steps, message } from "antd";
import "./AddProducts.css";

// 添加产品页面
const steps = [
  {
    title: "Verification",
    content: "First-content",
    icon: <SolutionOutlined />,
  },
  {
    title: "Pay",
    content: "Second-content",
    icon: <LoadingOutlined />,
  },
  {
    title: "Done",
    content: "Last-content",
    icon: <SmileOutlined />,
  },
];
const { Option } = Select;
const { Step } = Steps;

export default function AddProducts() {
  const [current, setCurrent] = useState(0);

  const pre = () => {
    current !== 3 ? setCurrent(current + 1) : message.info("good");
  };

  const bac = () => {
    current !== 0 ? setCurrent(current - 1) : message.info("good");
  };

  return (
    <div className="AddProducts-Content">
      {/* 步骤条 显示当前进度 */}
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} icon={item.icon} />
        ))}
      </Steps>

      {/* 内容显示区  */}
      <div className="Steps-show">
        <div
          className={`Steps-Content Right${current}`}
          style={{ backgroundImage: "red" }}
        >

          <div className="t1">
          <Verification/>    {/* 有BUG*/}
          </div>
          <div className="t2"> <PayContent/> </div>
          <div className="t3">  </div>
        </div>
      </div>

      {/* ---------------前进后退按钮区----------------- */}
      <div>
        <Button type="primary" onClick={pre}>
          next{" "}
        </Button>
        <Button
          type="primary"
          onClick={bac}
          style={{ display: current === 0 ? "none" : "inline-block" }}
        >
          back
        </Button>
      </div>
    </div>
  );
}
