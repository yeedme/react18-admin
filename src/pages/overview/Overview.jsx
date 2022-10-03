import React, { useEffect, useState } from "react";
import ContentTop from "../../compontent/ContentTop/ContentTop";
import "./Overview.css";
import DataCardItem from "../../compontent/dataCardItem/DataCardItem";
import { useSelector } from "react-redux";
import { username } from "../../Store/LoginStatus";
import { axiosGetDataCard } from "../../utils/http";

export default function Overview() {
  const [CardItemData,setCardItemData]=useState([]);
  //获取当前 用户名字（主键唯一值 用去搜索数据库的其他相关数据）
  const id = useSelector(username);
  const getItemData=async()=>{
    const result=await axiosGetDataCard(id);  //获取cardTiem数据
    setCardItemData(result);
  }
  useEffect(() => {
    //请求数据
    getItemData();
  },[]);
  return (
    <div className="OverView-Content">
      <div>
        <ContentTop />
      </div>
      <div className=" DataCardList">
        {CardItemData.map((t) => {
          return <DataCardItem CardItemData={t} key={t.Title} />;
        })}
      </div>
    </div>
  );
}
