import React from "react";
import { Card, Space } from "antd";

const ProfessionalNeedsCard = (props) => {
  const professionalNeeds = props.professionalNeeds;

  return (
    <Card
      title="Professional Needs"
      style={{
        width: 500,
        height: 300,
        background: "rgb(70, 76, 69)",
        opacity: 0.9,

        top: -1020,
        left: 800,
        color: "#ffffff",
        fontSize: "25px",
      }}
    >
      {professionalNeeds}
    </Card>
  );
};

export default ProfessionalNeedsCard;
