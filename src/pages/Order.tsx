import React, { useEffect, useState } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { TableRowSelection } from "antd/es/table/interface";
import { axiosGetOrderData } from "../utils/http";
import SelectTag from "../components/SelectTag";
interface DataType {
  key: React.Key;
  name: string;
  date: string;
  tradingStatus: string;
  transactionAmount: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: "订单号",
    dataIndex: "key",
    key: "",
  },
  {
    title: "用户名",
    dataIndex: "name",
  },
  {
    title: "交易日期",
    dataIndex: "date",
  },

  {
    title: "交易状态",
    dataIndex: "tradingStatus",
  },

  {
    title: "交易金额",
    dataIndex: "transactionAmount",
  },
  {
    title: "更多操作",
    render: (text, record) => (
      <a onClick={() => console.log(record.key)}>Delete</a>
    ),
  },
];


export default function Order() {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
    ],
  };
  const [orderData, setOrderData] = useState<any>(null);
// 过滤数据，好吧，其实也不是过滤，tradingStatus: string变成彩色标签
  function DataTypeFilter(data: DataType[]) {
    let newData = data.map((t) => {
      return { ...t, tradingStatus: SelectTag(t.tradingStatus) };
    });
    return newData;
  }
  //获取数据 然后过滤数据 最后渲染数据 
  async function getData() {
    //待修复：完全搞不懂返回类型  const data:type?????=await axiosGetOrderData()
    let data: any = await axiosGetOrderData();
    data = DataTypeFilter(data);
    setOrderData(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return orderData == null ? (
    <></>
  ) : (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={orderData}
    />
  );
}

