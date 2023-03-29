import React, { useState, useEffect } from "react";
import RenderSection from "../../common/RenderSection";

const NeedsEditForm = ({ ikigaiElements, userIkigai }) => {
  const [selectedWorldNeeds, setSelectedWorldNeeds] = useState([]);
  const [selectedCommunityNeeds, setSelectedCommunityNeeds] = useState([]);
  const [selectedPersonalNeeds, setSelectedPersonalNeeds] = useState([]);

  useEffect(() => {
    if (userIkigai) {
      setSelectedWorldNeeds(userIkigai?.what_the_world_needs?.world || []);
      setSelectedCommunityNeeds(
        userIkigai?.what_the_world_needs?.community || []
      );
      setSelectedPersonalNeeds(userIkigai?.what_the_world_needs?.you || []);
    }
  }, [
    userIkigai,
    setSelectedWorldNeeds,
    setSelectedCommunityNeeds,
    setSelectedPersonalNeeds,
  ]);

  return (
    <div>
      <RenderSection
        title="What does the world need?"
        options={ikigaiElements?.world}
        selected={selectedWorldNeeds}
        onSelect={setSelectedWorldNeeds}
      />
      <RenderSection
        title="What does your community need?"
        options={ikigaiElements?.community}
        selected={selectedCommunityNeeds}
        onSelect={setSelectedCommunityNeeds}
      />
      <RenderSection
        title="What do you need?"
        options={ikigaiElements?.you}
        selected={selectedPersonalNeeds}
        onSelect={setSelectedPersonalNeeds}
      />
    </div>
  );
};

export default NeedsEditForm;
