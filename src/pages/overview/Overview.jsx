import React from "react";
import ContentTop from "../../compontent/ContentTop/ContentTop";
import "./Overview.css";
import DataCardItem from "../../compontent/dataCardItem/DataCardItem";
export default function Overview() {
  const CardItemTestData = [
    {
      title: "Total Sales",
      number: "$381,820.75",
      status: "rise",
      data: "17%",
    },
    {
      title: "Total Sales",
      number: "$1000.2",
      status: "fall",
      data: "3%",
    },
    {
      title: "Total Sales",
      number: "$3,028.7",
      status: "rise",
      data: "9%",
    },
    {
      title: "Total Sales",
      number: "$431.4",
      status: "rise",
      data: "2%",
    },
  ];
  return (
    <div className="OverView-Content">
      <div>
        <ContentTop />
      </div>
      <div className=" DataCardList">
        {CardItemTestData.map((t) => {
          return <DataCardItem CardItemTestData={t} />;
        })}
      </div>
    </div>
  );
}
