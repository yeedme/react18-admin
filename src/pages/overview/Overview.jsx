import React, { useEffect } from "react";
import ContentTop from "../../compontent/ContentTop/ContentTop";
import "./Overview.css";
import DataCardItem from "../../compontent/dataCardItem/DataCardItem";
import { useSelector } from "react-redux"
import {username} from "../Store/LoginStatus"
import { axiosGetDataCard } from "../../utils/http";
export default function Overview() {
  const id=useSelector(username);
  const CardItemTestData = id;
  useEffect(()=>{
    axiosGetDataCard(id);
  })
  return (
    <div className="OverView-Content">
      <div>
        <ContentTop />
      </div>
      <div className=" DataCardList">
        {CardItemTestData.map((t) => {
          return <DataCardItem CardItemTestData={t} key={t.key}/>;
        })}
      </div>
    </div>
  );
}
