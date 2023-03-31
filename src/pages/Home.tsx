import React from "react";
import HomeBanner from "../components/home/HomeBanner";
import HomeMassageCard from "../components/home/HomeMassageCard";
import HomeWhoToFollow from "../components/home/HomeWhoToFollow";
import HomeTrendCard from "../components/home/HomeTrendCard";

function Home() {
  return (
    <>
      <div className="grid grid-cols-3 grid-row-1 gap-4">
        <div className="col-span-2">
          <HomeBanner />
          <HomeMassageCard />
          <HomeMassageCard />
        </div>
        <div className="col-span-1">
          <HomeWhoToFollow />
          <HomeTrendCard />
        </div>
      </div>
    </>
  );
}

export default Home;
