import React from "react";
import ContentTop from "../../compontent/ContentTop/ContentTop";
import './Overview.css'
export default function Overview() {
  return (
    <div className="OverView-Content">
      <div>
        <ContentTop />
      </div>
      <div className=" DataCardList"> 
        <div className="DataCard"/>
        <div className="DataCard"/>
        <div className="DataCard"/>
        <div className="DataCard"/>
      </div>
    </div>
  );
}
