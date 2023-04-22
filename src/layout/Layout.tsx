import React, { useState } from "react";
import Banner from "../components/banner/Banner";
import Nav from "../components/nav/Nav";
import { Outlet } from "react-router-dom";
import MobleBanner from "../components/banner/MobleBanner";
function Layout() {
  //控制移动端导航栏
  const [mobleBannerShow,setMobleBannerShow]=useState<boolean>(false);
  return (
    <div className="w-screen h-screen">
      {/* --顶部操作栏-- */}
      <Banner />
      {/* --侧边导航栏-- */}
      <Nav />
      <MobleBanner setMobleBannerShow={setMobleBannerShow} mobleBannerShow={mobleBannerShow}/>
      {/* --字路由展示区-- */}
      <div className="w-full h-auto pt-24 md:pl-20 md:pr-8 bg-gray-100">
        <Outlet/>
      </div>
    </div>
  );
}

export default Layout;
