import React from "react";
import { Card, Space } from "antd";

const BioCard = (props) => {
  const bio = props.bio;

  return (
    <Space direction="vertical" size={16}>
      <Card
        title="Bio"
        style={{
          width: 250,
          height: "auto",
          background: "rgb(70, 76, 69)",
          opacity: 0.9,
          top: 223,
          left: -125,
          color: "#ffffff",
        }}
      >
        {bio}
      </Card>
    </Space>
  );
};

export default BioCard;
