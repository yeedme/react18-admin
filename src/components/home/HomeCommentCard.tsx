import React from "react";
import { Avatar, Button, Popover } from "antd";
import jodi from "../../assets/imgsvg/jodi.svg";
type Props = {};
const t = "\u1F600";
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
      <div className="w-full h-atuo bg-white overflow-auto YscrollBnaer p-4 border-2">
        <div className="h-auto border-b-2 mt-2 pb-2">
          {/* 用户栏 */}
          <div className="w-40 flex">
            <Avatar src={jodi} size={32} />
            <div className="text-sm">
              <h2>pertpake</h2>
              <h2>12-2 12:34</h2>
            </div>
          </div>
          {/* 评论内容 */}
          <div>
            <h2>
              little pig he ok reot little pig he ok reotlittle pig he ok
              reotlittle pig he ok reotlittle pig he ok reot
            </h2>
          </div>
        </div>
        <div className="h-auto border-b-2 mt-2 pb-2">
          {/* 用户栏 */}
          <div className="w-40 flex">
            <Avatar src={jodi} size={32} />
            <div className="text-sm">
              <h2>pertpake</h2>
              <h2>12-2 12:34</h2>
            </div>
          </div>
          {/* 评论内容 */}
          <div>
            <h2>
              little pig he ok reot little pig he ok reotlittle pig he ok
              reotlittle pig he ok reotlittle pig he ok reot
            </h2>
          </div>
        </div>
      </div>
      <div className="w-full px-4 bg-white">
        {/* Emoji表情区 */}
        <div className="w-full flex">
          <Popover content={Emoji} title="我的表情">
            <Button>表情包</Button>
          </Popover>
          <input type="text" className="border-2"/>
          <Button> 发送</Button>
        </div>
      </div>
    </>
  );
}
