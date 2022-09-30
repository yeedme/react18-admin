import { Layout } from "antd";
import React, { useState } from "react";
import VMenu from "../Menu/VMenu";
import "./Home.css";
import { Outlet } from "react-router-dom";
import Account from "../account/Account";
const { Header, Content, Footer, Sider } = Layout;

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="Home">
      <Sider theme="light" breakpoint="lg" collapsedWidth="0">
        <div className="logo" />

        {/*-------------------------- 左侧导航展示区---------------------------- */}
        <VMenu />
      </Sider>
      <Layout>
        {/*-------------------------- 顶部展示区---------------------------- */}
        <Header className="Home-Header">
          <Account />
        </Header>
        <Content>
          {/*-------------------------- 路由展示区---------------------------- */}
          <div className="Home-Content">
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
