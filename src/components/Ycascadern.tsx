import React from 'react';
import { Cascader } from 'antd';

interface Option {
  value: string | number;
  label: string;
  children?: Option[];
}

interface Props {
  op: Option[];
  onChange: (value: string[] | number[]  ) => void;
}

const Ycascadern = ({ op, onChange }: Props) => {
  const handleChange = (value: string[] | number[] | any) => {
    // 处理选项变化的逻辑
    onChange(value);
  };

  return (
    <Cascader options={op} onChange={handleChange} placeholder="Please select" />
  );
};
export default Ycascadern