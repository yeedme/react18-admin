import React from "react";
import ContentTop from "../../compontent/ContentTop/ContentTop";
import "./Overview.css";
import DataCardItem from "../../compontent/dataCardItem/DataCardItem";
export default function Overview() {
  const CardItemTestData = [
    {
      title: "Total Sales",
      key:"TotalSales",
      number: "$381,820.75",
      trend: "rise",
      data: "17%",
      detail:'+15.3k'
    },
    {
      title: "Vistor",
      key:"Vistor",
      number: "$1000.2",
      trend: "fall",
      data: "3%",
      detail:'-6.7k'
    },
    {
      title: "Total Orders",
      key:"TotalOrders",
      number: "$3,028.7",
      trend: "rise",
      data: "9%",
      detail:'-170'
    },
    {
      title: "Refunded",
      key:"Refunded",
      number: "$431.4",
      trend: "rise",
      data: "2%",
      detail:'+20'
    },
  ];
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
