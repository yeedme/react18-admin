import { Avatar, Dropdown, Menu, message, Space } from "antd";
import { DownOutlined } from '@ant-design/icons';
import React from "react";
import "./Account.css";

import { useSelector } from 'react-redux/'
import {RealName} from "../../Store/LoginStatus"
import { useDispatch } from "react-redux/";
import { offline } from "../../Store/LoginStatus"
import { useNavigate}from "react-router-dom"
export default function Account() {
  //气泡卡片 hover头像时 会有操作选项
  const name=useSelector(RealName);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const onClick = () => {
    dispatch(offline());
    navigate('/login')
  };
  const menu = (
    <Menu
      onClick={onClick}
      items={[
        {
          label: 'offline',
          key: '1',
        },
      ]}
    />
  );
  
  return (
    <div className="Account-Content">
      <Avatar
        ize={{
          xs: 30,
          md: 35,
          lg: 35,
          xl: 45,
        }}
      >
        {name}
      </Avatar>

    <Dropdown overlay={menu}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        {name}
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
    </div>
  );
}
