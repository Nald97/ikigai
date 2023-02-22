import React from "react";
import { Card, Space } from "antd";

const PersonalNeedsCard = (props) => {
  const personalNeeds = props.personalNeeds;

  return (
    <Card
      title="Personal Needs"
      style={{
        width: 500,
        height: 300,
        background: "rgb(31, 48, 63)",
        opacity: 0.9,

        top: -950,
        left: 800,
        color: "#ffffff",
        fontSize: "25px",
      }}
    >
      {personalNeeds}
    </Card>
  );
};

export default PersonalNeedsCard;
