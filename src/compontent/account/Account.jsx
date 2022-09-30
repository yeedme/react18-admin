import { Avatar, Button, Popover } from "antd";
import React from "react";
import "./Account.css";
export default function Account() {
  //气泡卡片 hover头像时 会有操作选项
  const content = (
    <div className="Account-options">
      <Button type="danger" size="small">
        offline
      </Button>
      <Button type="danger" size="small">
        offline
      </Button>
    </div>
  );

  return (
    <div className="Account-Content">
      <Popover
        placement="bottomRight"
        title="Lucy"
        trigger="hover"
        content={content}
        arrowPointAtCenter
        style={{ width: "50px" }}
      >
        <Avatar
          ize={{
            xs: 30,
            sm: 30,
            md: 35,
            lg: 35,
            xl: 45,
            xxl: 55,
          }}
        >
          Lucy
        </Avatar>
      </Popover>
    </div>
  );
}
