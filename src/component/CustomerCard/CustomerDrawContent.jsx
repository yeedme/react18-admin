import React from "react";
import { Timeline, Avatar, Statistic, Col, Row, Comment, Tooltip } from "antd";
import TimelineItem from "antd/lib/timeline/TimelineItem";
export default function CustomerDrawContent(props) {
  const { data } = props;
  //动态生成物流信息
  const TimelineTtemType = (status) => {
    switch (status) {
      case "paid":
        return (
          <>
            <TimelineItem>支付时间：{data.time}</TimelineItem>
            <TimelineItem>发货时间：{data.push}</TimelineItem>
            <TimelineItem>收货时间：{data.Receipt}</TimelineItem>
          </>
        );
      case "canceled":
        return (
          <>
            <TimelineItem>支付时间：{data.time}</TimelineItem>
            <TimelineItem>退款原因：{data.reason}</TimelineItem>
            <TimelineItem>退款时间：{data.canceled}</TimelineItem>
          </>
        );
      default:
        return (
          <>
            <TimelineItem>支付时间：{data.time}</TimelineItem>
            <TimelineItem>订单异常：{data.error}</TimelineItem>
          </>
        );
    }
  };
  return (
    <>
      <p>订单号：{data.oderId}</p>
      <p>物流信息：</p>
      <Timeline>{TimelineTtemType(data.paystatus)}</Timeline>
      <Row>
        <Col span={12}>
          <Statistic title="金额" value={data.price} />
        </Col>
        <Col span={12}>
          <Statistic title="支付方式" value={data.payment} />
        </Col>
      </Row>
      <Comment
        author={<a>{data.name}</a>}
        avatar={
          <Avatar
            src={`https://joeschmoe.io/api/v1/${data.name}`}
            alt={data.name}
          />
        }
        content={<p>{data.comment}</p>}
        datetime={
          <Tooltip>
            <span>{data.date}</span>
          </Tooltip>
        }
      />
    </>
  );
}
