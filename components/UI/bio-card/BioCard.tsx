import React from "react";
import { Card, Space } from "antd";

const BioCard: React.FC = () => (
  <Space direction="vertical" size={16}>
    <Card
      
      style={{
        width: 500,
        height: 150,
        background: "rgb(70, 76, 69)",
        opacity: 0.9,
        
        top: 260,
        left: -250,
        color: "#ffffff",
        fontSize: "30px",
      }}
    >Bio:</Card>
  </Space>
);

export default BioCard;
