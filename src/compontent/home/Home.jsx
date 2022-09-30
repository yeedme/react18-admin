import { Layout } from "antd";
import React, { useState } from "react";
import VMenu from "../Menu/VMenu";
import "./Home.css";
import { Outlet } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);
  
  return (
    <Layout className="Home">
      <Sider theme="light" breakpoint="lg" collapsedWidth="0">
        <div className="logo" />
        <VMenu />
      </Sider>
      <Layout>
        <Header className="Home-Header">asdasd</Header>
        <Content>
          <div
            className="Home-Content">
            <Outlet/>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
