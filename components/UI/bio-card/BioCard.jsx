import React from "react";
import { Card, Space } from "antd";
import useSheetData from "../../../hooks/getSheetData";

const BioCard = (props) => {
  const bio = props.bio;

  return (
    <Space direction="vertical" size={16}>
      <Card
        title="Bio"
        style={{
          width: 500,
          height: 700,
          background: "rgb(70, 76, 69)",
          opacity: 0.9,

          top: 260,
          left: -250,
          color: "#ffffff",
          fontSize: "30px",
        }}
      >
        {bio}
      </Card>
    </Space>
  );
};

export default BioCard;
