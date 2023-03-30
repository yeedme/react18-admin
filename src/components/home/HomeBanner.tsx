import React, { useState } from "react";

interface Props {
  // currentIndex:number
}

const HomeBanner = (props: Props) => {
  const [homeBannerData] = useState<string[]>(["最新消息", "热点", "最多回复"]);
  //选中改变样式
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  //根据currentIndex 请求不同数据
  function changeIndex(index:number){
    setCurrentIndex(index)
  }
  return (
    <div className="w-full h-14 grid grid-cols-3 text-md  ">
      {homeBannerData.map((t, index) => {
        return (
          <div
            key={index}
            className={`" w-full bg-white flex justify-center items-center cursor-pointer rounded border-b-4 transition-all "+${
                currentIndex===index  ?' border-red-400  ':" text-gray-500 "
            }`}
            onClick={()=>changeIndex(index)}
          >
            {t}
          </div>
        );
      })}
    </div>
  );
};
export default HomeBanner;
