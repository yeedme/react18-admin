import React from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  SettingOutlined,
  SearchOutlined,
  BulbOutlined,
  BarChartOutlined
} from "@ant-design/icons";
import { Layout, Menu,Avatar,Badge } from "antd";
import { useState } from "react";
import {  Outlet } from "react-router-dom";
import './LayoutHome.less'
const { Header, Sider, Content } = Layout;
export default function LayoutHome() {
  const [collapsed, setCollapsed] = useState(false);


  //需要优化 css 迫不得已才用内联css 权重不够
  return (
    <Layout className="LayoutHome">
      {/* 侧栏 */}
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ backgroundColor: "#676f9b", height: "100vh" }}
      >
        <div className="logo " > 
        <div  onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? (
              <MenuUnfoldOutlined
                className="LayoutHome_Fold"
              />
            ) : (
              <MenuFoldOutlined
              className="LayoutHome_Fold"
              />
            )} {collapsed?'':'关闭导航'}   
            </div></div>
       

        {/* 菜单 */}
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ backgroundColor: "#676f9b" }}
          items={[
            {
              key: "1",
              icon: <BarChartOutlined />,
              label: "数据面版",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "订单",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "菜单"
            },
            {
              key: "4",
              icon: <UploadOutlined />,
              label: "客户"
            },            {
              key: "5",
              icon: <UploadOutlined />,
              label: "数据分析"
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ backgroundColor: "#676f9b", padding:'0 10px' }} className="flex_JSpaceBetween_Acenter">
          <div className="flex_Jcenter_Acenter LayoutHome_MenuFoldBanner">
                 {/* 控制nav折叠区 */}
           
            <h2 className="colorWhite">{collapsed?'':'数据面板'}  </h2>
          </div>
            {/* 用户 搜索 设置 区 */}
          <div className="LayoutHome_OtherBanner flex_JSpaceAround_Acenter">
          <SearchOutlined className="LayoutHome_Logo" />
          <SettingOutlined  className="LayoutHome_Logo"/>
          <Badge count={2}><BulbOutlined  className="LayoutHome_Logo"/></Badge>
          <Avatar src="https://joeschmoe.io/api/v1/random" />
          </div>
        </Header>
        <Content style={{ backgroundColor: "#2d3250" }} className="LayoutHome_Content">
          <div className="Test"/>
          </Content>
      </Layout>
    </Layout>
  );
}
