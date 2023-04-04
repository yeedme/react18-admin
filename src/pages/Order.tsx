import React, { useState } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { TableRowSelection } from "antd/es/table/interface";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "订单编号",
    dataIndex: "orderId",
  },
  {
    title: "年龄",
    dataIndex: "age",
  },
  {
    title: "用户",
    dataIndex: "userName",
  },
  {
    title: "交易时间",
    dataIndex: "tradingTime",
  },
  {
    title: "交易状态",
    dataIndex: "tradingStatus",
  },
  {
    title: "交易金额",
    dataIndex: "ransactionAmount",
  },
  {
    title: "交易金额",
    dataIndex: "ransactionAmount",
  },
  {
    title: "更多操作",
    dataIndex: "options",
  },
];

const data: DataType[] = [];

for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: i,
    address: `London, Park Lane no. ${i}`,
  });
}

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
      {
        key: "odd",
        text: "·",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  return (
    <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
  );
}
