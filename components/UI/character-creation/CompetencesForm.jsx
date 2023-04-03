import React, { useState, useEffect } from "react";
import RenderSection from "../../common/RenderSection";

// Define the CompetencesForm component with its expected props
const CompetencesForm = ({
  topSkills,
  knowledge,
  expertise,
  selectedTopSkills,
  selectedKnowledge,
  selectedExpertise,
  setSelectedTopSkills,
  setSelectedKnowledge,
  setSelectedExpertise,
  userIkigai,
}) => {
  // This useEffect hook sets the initial state of the form based on the userIkigai prop
  useEffect(() => {
    if (userIkigai) {
      setSelectedTopSkills(userIkigai.what_are_you_good_at.skills || []);
      setSelectedKnowledge(userIkigai.what_are_you_good_at.knowledge || []);
      setSelectedExpertise(userIkigai.what_are_you_good_at.expertise || []);
    }
  }, [
    userIkigai,
    setSelectedTopSkills,
    setSelectedKnowledge,
    setSelectedExpertise,
  ]);

  // Render the form sections for top skills, knowledge, and areas of expertise
  return (
    <div>
      <RenderSection
        title="What are your top skills?"
        options={topSkills}
        selected={selectedTopSkills}
        onSelect={setSelectedTopSkills}
      />
      <RenderSection
        title="What knowledge do you have?"
        options={knowledge}
        selected={selectedKnowledge}
        onSelect={setSelectedKnowledge}
      />
      <RenderSection
        title="What are your areas of expertise?"
        options={expertise}
        selected={selectedExpertise}
        onSelect={setSelectedExpertise}
      />
    </div>
  );
};

export default CompetencesForm;
