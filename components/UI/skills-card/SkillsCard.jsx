import React from "react";
import { Card, Space } from "antd";
import useSheetData from "../../../hooks/getSheetData";

const SkillsCard = (props) => {
  const { data } = useSheetData();
  const skills = props.skills;

  // Split the skills string at each comma and map over the resulting array
  const skillList = skills?.split(",").map((skill, index) => {

    // Trim any leading or trailing whitespace from the skill
    const trimmedSkill = skill.trim();

    // Create a new p element for each skill
    return <p key={index}>{trimmedSkill}</p>;
  });

  return (
    <Space direction="vertical" size={16}>
      <Card
        title="Skills"
        color="white !important"
        
        style={{
          width: 500,
          height: 280,
          background: "rgb(70, 76, 69)",
          opacity: 0.9,
          top: -407,
          left: 800,
          font: "#ffffff",
          fontSize: "25px",
          overflow: "hidden",
        }}
      >
        <div style={{ color: "white" }}>{skillList}</div>
      </Card>
    </Space>
  );
};

export default SkillsCard;
