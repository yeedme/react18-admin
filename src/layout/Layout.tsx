import React from "react";
import Banner from "./components/banner/Banner";
import Nav from "./components/nav/Nav";

function Layout() {
  return (
    <div className="w-screen h-screen">
      {/* --顶部操作栏-- */}
      <Banner />
      {/* --侧边导航栏-- */}
      <Nav />
      {/* --字路由展示区-- */}
      <div className="w-screen h-screen pt-24 md:pl-20 md:pr-8 ">
        
      </div>
    </div>
  );
}

export default Layout;
