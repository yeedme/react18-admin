import React from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useState } from "react";
const { Header, Sider, Content } = Layout;
export default function LayoutHome() {
  const [collapsed, setCollapsed] = useState(false);


  //需要优化 css
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
        <Header style={{ backgroundColor: "#676f9b", padding: 0 }} className="Header displayFlex">
          <div className="MenuUnfold" onClick={() => setCollapsed(!collapsed)}
          style={{height:'64px',width:'64px'}}>
            {collapsed ? (
              <MenuUnfoldOutlined
                style={{ color: "white", fontSize: "30px" }}
              />
            ) : (
              <MenuFoldOutlined
                style={{ color: "white", fontSize: "30px" }}
              />
            )}           
          </div>
          <div><button>123213</button></div>
        </Header>
        <Content style={{ backgroundColor: "#2d3250" }}>Content</Content>
      </Layout>
    </Layout>
  );
}
