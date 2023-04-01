import React from "react";
import { Button, Popover } from "antd";
type Props = {};
const t='\u1F600'
const Emoji = (
    <div className="flex flex-warp text-xl">
      <p className="cursor-pointer">&#x1F600; </p>
      <p className="cursor-pointer">&#x1F609; </p>
      <p className="cursor-pointer">&#x1F60A; </p>
      <p className="cursor-pointer">&#x1F617; </p>
      <p className="cursor-pointer">&#x1F929; </p>
      <p className="cursor-pointer">&#x1F61C; </p>
      <p className="cursor-pointer">&#x1F913; </p>
      <p className="cursor-pointer">{t} </p>
    </div>
  );
  
export default function HomeCommentCard({}: Props) {
  return (
    <>
      <div className="w-full h-80 bg-red-100 overflow-auto YscrollBnaer">
        <div className="w-12 h-80 bg-red-200"></div>
        <div className="w-12 h-80 bg-red-300"></div>
      </div>
      <div className="w-full">
        {/* Emoji表情区 */}
        <div>
          <Popover content={Emoji} title="我的表情">
            <Button type="primary">Hover me</Button>
          </Popover>
        </div>
        <input type="text" />
      </div>
    </>
  );
}
