import React from "react";
import { Button } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";

export default function DemoAntD(props) {
  return (
    <div>
      <h3>Demo antd</h3>
      <Button
        type="link"
        icon={<PlayCircleOutlined style={{ fontSize: "20px" }} />}
      >
        Đăng ký
      </Button>
    </div>
  );
}
