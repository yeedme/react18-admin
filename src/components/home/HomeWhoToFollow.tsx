import { Avatar } from "antd";
import React, { useEffect, useState } from "react";

type Props = {};
export default function HomeWhoToFollow({}: Props) {
  const [testData,setTestDate]=useState('kk');
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
      <div className="w-full h-20  mt-4 flex justify-between items-center border-b-2 ">
        <div className="flex items-center">
          <Avatar size={46} />
          <div className="ml-2">
            <h2>laofucking</h2>
            <h2 className="text-gray-500 text-sm">@laofucking</h2>
          </div>
        </div>
        <div className="flex items-center cursor-pointer">
          <span className="mr-2  text-gray-500">+</span>
          <span>Follow</span>
        </div>
      </div>
      <div className="w-full h-20  mt-4 flex justify-between items-center border-b-2 ">
        <div className="flex items-center">
          <Avatar size={46} />
          <div className="ml-2">
            <h2>laofucking</h2>
            <h2 className="text-gray-500 text-sm">@laofucking</h2>
          </div>
        </div>
        <div className="flex items-center cursor-pointer">
          <span className="mr-2  text-gray-500">+</span>
          <span>Follow</span>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="border-2 w-96 h-10 mt-4 rounded text-ms hover:bg-red-400 hover:text-white">点击查看更多</button>
      </div>
    </div>
  );
}
