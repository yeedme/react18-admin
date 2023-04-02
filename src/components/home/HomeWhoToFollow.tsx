import { Avatar } from "antd";
import React, { useEffect, useState } from "react";
import jake from "../../assets/imgsvg/jake.svg";
import jack from "../../assets/imgsvg/jack.svg";
import jacques from "../../assets/imgsvg/jacques.svg";
import james from "../../assets/imgsvg/jabala.svg";
import jana from "../../assets/imgsvg/jana.svg";
type dateObject = {
  id: string;
  emails: string;
  Avatar: string;
};
const inital: dateObject[] = [
  {
    id: "Fake JustBinber",
    emails: "@FakeJustBinber",
    Avatar: jake,
  },
  {
    id: "CodingStartUp",
    emails: "@CodingStartUp",
    Avatar: jack,
  },
  {
    id: "灰机灰机",
    emails: "@Kiddle",
    Avatar: jacques,
  },
];
const newData = [
  {
    Avatar: james,
    id: "kook871",
    emails: "@kook871",
  },
  {
    Avatar: jana,
    id: "hangdsome boy",
    emails: "@hdsboy",
  },
];
export default function HomeWhoToFollow() {
  const [initalDate, setInitalDate] = useState(inital);
  const [requstData,setRequstDate]=useState(false);
  const [follow,setFollow]=useState(false);
  function updateData() {
    setInitalDate(() => [...inital, ...newData]);
  }
  useEffect(() => {
    // const timer = setTimeout(() => {
    //   setTestDate("asd1237126312876387126387")
    // }, 2000);
    // return () => {
    //   clearTimeout(timer);
    // };
  }, []);

  return (
    <div className="w-full h-auto bg-white p-4 rounded border-2">
      <h2>猜你喜欢</h2>
      {initalDate.map((t, index) => {
        return (
          <div
            className="w-full h-20  mt-4 flex justify-between items-center border-b-2 "
            key={index}
          >
            <div className="flex items-center">
              <Avatar size={46} src={t.Avatar} />
              <div className="ml-2">
                <h2>{t.id}</h2>
                <h2 className="text-gray-500 text-sm">{t.emails}</h2>
              </div>
            </div>
            <div className="flex items-center cursor-pointer" onClick={()=>setFollow(follow=>!follow)}>
              <span className="mr-2  text-gray-500">+</span>
              <span>Follow</span>
            </div>
          </div>
        );
      })}

      <div className="flex justify-center">
        <button
          className="border-2 w-96 h-10 mt-4 rounded text-ms hover:bg-red-400 hover:text-white"
          onClick={updateData}
        >
          点击查看更多
        </button>
      </div>
    </div>
  );
}
