import React from "react";
import Banner from "./components/banner/Banner";
import Nav from "./components/nav/Nav";
import Yinput from "../components/Yinput";
function Layout() {
    return (
        <div className="w-screen h-screen">
            {/* --顶部操作栏-- */}
            <Banner />
            {/* --侧边导航栏-- */}
            <Nav />
            {/* --路由展示区-- */}
            <div className="w-screen h-screen pt-24 md:pl-20 md:pr-8 ">
                <Yinput title="用户名" />
                <Yinput title="密码" />
                <div className="w-1/2 h-1/2 bg-green-200" />
                <div className="w-1/2 h-1/2 bg-green-300" />
            </div>
        </div>
    );
}

export default Layout;
