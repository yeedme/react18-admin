import React from "react";
import { Input, Avatar, Badge } from "antd";
import { SearchOutlined} from '@ant-design/icons'
const { Search } = Input;
function Banner() {
  return (
    <div className="w-screen h-20  fixed z-40 flex justify-between items-center border-b-2 bg-white">
      <div className="w-32 h-20 flex justify-between items-center">
      <div className="w-8 h-8  flex justify-center items-center ml-2">
        <svg
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3624"
          width="100%"
          height="100%"
        >
          <path
            d="M232.727273 81.035636l744.727273 0 0 42.263273-744.727273 0 0-42.263273Z"
            p-id="3625"
          ></path>
          <path
            d="M46.545455 46.545455l93.090909 0 0 92.974545-93.090909 0 0-92.974545Z"
            p-id="3626"
          ></path>
          <path
            d="M232.727273 490.868364l744.727273 0 0 42.263273-744.727273 0 0-42.263273Z"
            p-id="3627"
          ></path>
          <path
            d="M46.545455 465.524364l93.090909 0 0 92.974545-93.090909 0 0-92.974545Z"
            p-id="3628"
          ></path>
          <path
            d="M232.727273 899.118545l744.727273 0 0 42.263273-744.727273 0 0-42.263273Z"
            p-id="3629"
          ></path>
          <path
            d="M46.545455 884.48l93.090909 0 0 92.974545-93.090909 0 0-92.974545Z"
            p-id="3630"
          ></path>
        </svg>
      </div>
      <h2 className="md:text-2xl">
        title
      </h2>
      </div>
      <div className="flex justify-between items-center ">
        <div>
          <Search size="large" defaultValue="输入搜索内容" className="md:block hidden"/>
          <SearchOutlined className="md:hidden text-3xl"/>
        </div>
        {/* 头像+消息点 */}
        <div className="mr-8">
          <Badge count={5} className="mx-5">
            <Avatar src="https://joesch.moe/api/v1/random?key=1" size={50} />
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default Banner;
