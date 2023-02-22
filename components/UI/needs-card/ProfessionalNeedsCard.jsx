import React from "react";
import { Card, Space } from "antd";

const ProfessionalNeedsCard = (props) => {
  const professionalNeeds = props.professionalNeeds;

  return (
    <Card
      title="Professional Needs"
      style={{
        width: 250,
        height: "auto",
        background: "rgb(70, 76, 69)",
        opacity: 0.9,

        top: -510,
        left: 400,
        color: "#ffffff",
      }}
    >
      {professionalNeeds}
    </Card>
  );
};

export default ProfessionalNeedsCard;
