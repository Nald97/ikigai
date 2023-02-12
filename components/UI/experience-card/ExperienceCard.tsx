import React from "react";
import { Card, Space } from "antd";


const ExperienceCard: React.FC = () => (
  <Space direction="vertical" size={16} >
    <Card
      title="Experience"
      color="white !important"
      extra={<a href="#">More</a>}
      style={{
        width: 500,
        height: 280,
        background: "rgb(31, 48, 63)",
        opacity: 0.9,
        top: -40,
        left: -200,
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

export default ExperienceCard;