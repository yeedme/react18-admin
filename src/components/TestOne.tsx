import React from 'react'
import { Switch } from 'antd';
const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
function testOne() {
  return (
    <Switch defaultChecked onChange={onChange} />
  )
}

export default testOne