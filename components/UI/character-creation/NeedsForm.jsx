import React, { useState, useEffect } from "react";
import RenderSection from "../../common/RenderSection";
import { getIkigaiElements } from "../../../api/FirestoreAPI";

const NeedsForm = ({
  worldNeeds,
  communityNeeds,
  personalNeeds,
  selectedWorldNeeds,
  selectedCommunityNeeds,
  selectedPersonalNeeds,
  setSelectedWorldNeeds,
  setSelectedCommunityNeeds,
  setSelectedPersonalNeeds,
}) => {


  return (
    <div>
      <RenderSection
        title="What does the world need?"
        options={worldNeeds}
        selected={selectedWorldNeeds}
        onSelect={setSelectedWorldNeeds}
      />
      <RenderSection
        title="What does your community need?"
        options={communityNeeds}
        selected={selectedCommunityNeeds}
        onSelect={setSelectedCommunityNeeds}
      />
      <RenderSection
        title="What do you need?"
        options={personalNeeds}
        selected={selectedPersonalNeeds}
        onSelect={setSelectedPersonalNeeds}
      />
    </div>
  );
};

export default NeedsForm;
