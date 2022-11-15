import React from "react";
import "./RecentComment.less";
import { Carousel, Card, Avatar, Tag } from "antd";
export default function RecentComment() {
  return (
    <>
      <div className="RecentComment">
        <Carousel className="hundredPrecent">
          <div>
            <Card
              title={
                <>

                  <Avatar src="https://joeschmoe.io/api/v1/joke" /> 
                </>
              }
              extra={<a href="#">更多</a>}
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <p>评论</p>
              <p>炸鸡没鸡肉,点可乐送雪碧？下次再来</p>
              <p>2088-10-1 09:11</p>
              <div>
                <Tag color="magenta">全是肉</Tag>
                <Tag color="red">惊喜满满</Tag>
                <Tag color="volcano">冲刺</Tag>
              </div>
            </Card>
          </div>
          <div>
            <Card
              title={
                <>
                  <Avatar src="https://joeschmoe.io/api/v1/jake" />
                </>
              }
              extra={<a href="#">更多</a>}
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <p>评论</p>
              <p>好吃是真的好吃</p>
              <p>2088-10-1 09:11</p>
              <div>
                <Tag color="green">绿色有机</Tag>
                <Tag color="red">好吃</Tag>
                <Tag color="cyan">好评</Tag>
                <Tag color="cyan">干净</Tag>
              </div>
            </Card>
          </div>
        </Carousel>
      </div>
    </>
  );
}
