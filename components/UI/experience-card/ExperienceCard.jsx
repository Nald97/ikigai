import React from "react";
import { Card, Space } from "antd";
import useSheetData from "../../../hooks/getSheetData";

const ExperienceCard = (props) => {
  const experience = props.experience;

  // Split the experience string at each comma and map over the resulting array
  const experienceList = experience?.split(",").map((experience, index) => {
    // Trim any leading or trailing whitespace from the experience
    const trimmedExperience = experience.trim();
    // Create a new p element for each experience
    return <p key={index}>{trimmedExperience}</p>;
  });

  return (
    <Space direction="vertical" size={16}>
      <Card
        title="Experience"
        color="white !important"
        style={{
          width: 250,
          height: "auto",
          background: "rgb(31, 48, 63)",
          opacity: 0.9,
          top: 48,
          left: -100,
          font: "#ffffff",
        }}
      >
        <div style={{ color: "white" }}>{experienceList}</div>
      </Card>
    </Space>
  );
};

export default ExperienceCard;
