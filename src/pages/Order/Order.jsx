import React from "react";
import { Table, Tag,Progress,Tabs } from "antd";
import "./Order.less";
const oderListType = [
  "名字",
  "订单号",
  "金额",
  "近7天",
  "近30天",
  "近一年",
  "今天",
];
const Vdata = [
  {
    name: "小明",
    orderId: "#1001",
    menony: "13,123",
    D7: "+7.1%",
    D30: "-10%",
    Dy: "+2%",
    today: "+6%",
    key: "1",
  },
  {
    name: "张三",
    orderId: "#1002",
    menony: "13,123",
    D7: "+7.1%",
    D30: "-10%",
    Dy: "+2%",
    today: "+6%",
    key: "2",
  },
  {
    name: "王大牛",
    orderId: "#1003",
    menony: "13,123",
    D7: "+7.1%",
    D30: "-10%",
    Dy: "+2%",
    today: "+6%",
    key: "3",
  },
  {
    name: "赵六",
    orderId: "#1004",
    menony: "13,123",
    D7: "+7.1%",
    D30: "-10%",
    Dy: "+2%",
    today: "+6%",
    key: "4",
  },
];
//标签页的数据
const TaBitems = [
  { label: '项目 1', key: 'item-1',  }, // 务必填写 key
  { label: '项目 2', key: 'item-2',  },
];
//渲染table里的 D7 D30...
function R(data) {
  let trend = data.substring(0, 1);
  let color = trend == "+" ? "green" : "red";
  return <Tag color={color}>{data}</Tag>;
}
//生成 table header数据
const columns = [
  {
    title: "名字",
    width: 100,
    dataIndex: "name",
    key: "1",
    fixed: "left",
  },
  {
    title: "订单号",
    width: 150,
    dataIndex: "orderId",
    key: "2",
  },
  {
    title: "金额",
    dataIndex: "menony",
    key: "3",
  },
  {
    title: "近7天",
    dataIndex: "D7",
    key: "4",
    render: (data) => {
      return R(data);
    },
  },
  {
    title: "近30天",
    dataIndex: "D30",
    key: "5",
    render: (data) => {
      return R(data);
    },
  },
  {
    title: "近一年",
    dataIndex: "Dy",
    key: "6",
    render: (data) => {
      return R(data);
    },
  },
  {
    title: "今天",
    dataIndex: "today",
    key: "7",
    render: (data) => {
      return R(data);
    },
  },

  {
    title: "Action",
    key: "operation",
    width: 100,
    render: () => <a>更多信息</a>,
  },
];

export default function Order() {
  return (
    <>
    <div className="OrderTarget flex_JSpaceBetween_Acenter">
    <div className="OrderTargetContext flex_JSpaceBetween_Acenter">
      <div>
        <h2>目标</h2>
        <p>133.0M</p>
      </div>
      <div>
        <h2>访客</h2>
        <p>76</p>
      </div>
      <div>
        <h2>已完成交易量</h2>
        <p>59.3M</p>
      </div>
      <div>
        <h2>趋势</h2>
        <p>+23%</p>
      </div>
    </div>

    <div className="OrderTargetProgess">
      <h2>已完成目标：54M</h2>

      <Progress
      strokeColor={{
        '0%': '#f9b17a',
        '100%': '#87d068',
      }}
      percent={56}
      style={{color:'white'}}
    />
    </div>
    </div>
    <div className="OrderTails">
    <Tabs items={TaBitems} />
      <Table
        className="OrderMenu"
        columns={columns}
        dataSource={Vdata}
        size="small"
        scroll={{
          x: 900,
        }}
      />
    </div>
    </>
  );
}
