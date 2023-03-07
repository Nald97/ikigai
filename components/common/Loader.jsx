import React from "react";
import { Space, Spin } from "antd";

export default function Loader() {

  return (
    <div className="flex justify-center items-center h-screen flex-col gap-10 color-white">
      <p className="font-system font-medium text-white text-opacity-90 text-lg">
        Loading.. Please wait..
      </p>
      <Space size="middle">
        <Spin size="large" />
      </Space>
    </div>
  );
}
