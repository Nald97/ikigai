import React from "react";
import { Card, Space } from "antd";


const SkillsCard: React.FC = () => (
  <Space direction="vertical" size={16} >
    <Card
      title="Skills"
      color="white !important"
      extra={<a href="#">More</a>}
      style={{
        width: 500,
        height: 280,
        background: "rgb(70, 76, 69)",
        opacity: 0.9,
        top: -407,
        left:800,
        font:"#ffffff",
        
      }}
    >
      <div style={{ color: "white" }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </div>
    </Card>
  </Space>
);

export default SkillsCard;
