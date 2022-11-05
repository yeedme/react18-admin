import React from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  SettingOutlined,
  SearchOutlined,
  BulbOutlined
} from "@ant-design/icons";
import { Layout, Menu,Avatar,Badge } from "antd";
import { useState } from "react";
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
        <div className="logo" />
        <img style={{ height: "64px", width: "100%" }} />

        {/* 菜单 */}
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ backgroundColor: "#676f9b" }}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "nav 1",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">

   
        <Header style={{ backgroundColor: "#676f9b", padding:'0 10px' }} className="flex_JSpaceBetween_Acenter">
          <div className="flex_Jcenter_Acenter LayoutHome_MenuFoldBanner">
                 {/* 控制nav折叠区 */}
            <div className="MenuUnfold" onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? (
              <MenuUnfoldOutlined
                className="LayoutHome_Logo"
              />
            ) : (
              <MenuFoldOutlined
              className="LayoutHome_Logo"
              />
            )}     
            </div>
            <h2 className="colorWhite">数据面板</h2>
          </div>
            {/* 用户 搜索 设置 区 */}
          <div className="LayoutHome_OtherBanner flex_JSpaceAround_Acenter">
          <SearchOutlined className="LayoutHome_Logo" />
          <SettingOutlined  className="LayoutHome_Logo"/>
          <Badge count={2}><BulbOutlined  className="LayoutHome_Logo"/></Badge>
          <Avatar src="https://joeschmoe.io/api/v1/random" />
  
          </div>
        </Header>
        <Content style={{ backgroundColor: "#2d3250" }}>Content</Content>
      </Layout>
    </Layout>
  );
}
