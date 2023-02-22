import React from "react";
import { Card, Space } from "antd";

const PersonalNeedsCard = (props) => {
  const personalNeeds = props.personalNeeds;

  return (
    <Card
      title="Personal Needs"
      style={{
        width: 250,
        height: "auto",
        background: "rgb(31, 48, 63)",
        opacity: 0.9,

        top: -425,
        left: 400,
        color: "#ffffff",
      }}
    >
      {personalNeeds}
    </Card>
  );
};

export default PersonalNeedsCard;
