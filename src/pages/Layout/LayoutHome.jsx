import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ContainerOutlined,
  ShoppingCartOutlined,
  SettingOutlined,
  LikeOutlined,
  SearchOutlined,
  BulbOutlined,
  BarChartOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

import { Layout, Menu, Badge, Avatar } from "antd";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./LayoutHome.less";
const { Header, Sider, Content } = Layout;
const labels = ["数据面板", "订单", "菜单", " 客户", "数据分析"];
export default function LayoutHome() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [label, setLabel] = useState(labels[0]);
  const [menuKey,setMenuKey]=useState('/guard/LayoutHome/dashboard"')
  const CollapsedComponent = () => {
    return (
      <div
        onClick={() => setCollapsed(!collapsed)}
        className="LayoutHome_CollapsedComponent "
      >
        {collapsed ? (
          <MenuUnfoldOutlined className="icon" />
        ) : (
          <MenuFoldOutlined className="icon" />
        )}
      </div>
    );
  };
  const MenuComponent = () => {
    return (
      <Menu
        theme="dark"
        mode="inline"
        inlineIndent="20"
        defaultSelectedKeys={menuKey}
        style={{ backgroundColor: "#424769" }}
        onClick={(value) => {
          navigate(value.key);
          setMenuKey(value.key)
        }}
        items={[
          {
            key: "/guard/LayoutHome/dashboard",
            icon: <AppstoreOutlined />,
            label: "数据面版",
          },
          {
            key: "/guard/LayoutHome/order",
            icon: <ShoppingCartOutlined />,
            label: "订单",
          },
          {
            key: "/guard/LayoutHome/menu",
            icon: <ContainerOutlined />,
            label: "菜单",
          },
          {
            key: "/guard/LayoutHome/customer",
            icon: <LikeOutlined />,
            label: "客户",
          },
          {
            key: "/guard/LayoutHome/analyse",
            icon: <BarChartOutlined />,
            label: "数据分析",
          },
        ]}
      />
    );
  };
  //默认跳转 dashboard
  useEffect(()=>{
    navigate('/guard/LayoutHome/dashboard');
    setMenuKey("/guard/LayoutHome/dashboard")
  },[])
  return (
    <Layout>
      {/* 顶部组件区 包括 控制左侧导航的开关 用户头像  消息 全局搜索 设置 */}
      <Header
        className="site-layout-background"
        style={{
          padding: 0,
        }}
      >
        <div className="flex_JSpaceBetween_Acenter LayoutHome_Banner">
          <div className="flex_JSpaceBetween_Acenter">
            {/* 控制左侧导航的开关  */}
            <CollapsedComponent />
            <h3 style={{ color: "white", marginLeft: "10px" }}>{label}</h3>
          </div>
          {/* 用户头像  消息 全局搜索 设置 */}
          <div className="LayoutHome_otherOptions">
            <SearchOutlined className="icon" />
            <SettingOutlined className="icon" />
            <Badge count={2}>
              <BulbOutlined className="icon" />
            </Badge>
            <Avatar src="https://joeschmoe.io/api/v1/random" />
          </div>
        </div>
      </Header>

      <Layout>
  {/* 左侧边组件区  导航区*/}
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{ backgroundColor: "#424769" }}
          className={collapsed ? "LayoutHome_MenuComponent" : ""}
        >
          <MenuComponent />
        </Sider>
  {/* 中间组件区  子路由组件展示*/}
        <Content className="LayoutHome_Content" style={{}}>
          <Outlet />
        </Content>

      </Layout>
    </Layout>
  );
}
