import React from "react";
import HomeBanner from "../components/HomeBanner";
import HomeMassageCard from "../components/HomeMassageCard";
function Home() {
  return <>
      <div className="grid grid-cols-3 grid-row-1 gap-4">
          <div className="col-span-2">
            <HomeBanner/>
            <HomeMassageCard/>
            <HomeMassageCard/>
          </div>
          <div className="col-span-1">2</div>
      </div>
  </>;
}

export default Home;
