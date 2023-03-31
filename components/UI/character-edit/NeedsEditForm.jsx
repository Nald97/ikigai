import React, { useState, useEffect } from "react";
import RenderSection from "../../common/RenderSection";
import { editProfile } from "../../../api/FirestoreAPI";

const NeedsEditForm = ({ ikigaiElements, userIkigai, userId }) => {
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

  const handleSaveChanges = () => {
    const updatedData = {
      ikigai: {
        ...userIkigai,
        what_the_world_needs: {
          world: selectedWorldNeeds,
          community: selectedCommunityNeeds,
          you: selectedPersonalNeeds,
        },
      },
    };

    editProfile(userId, updatedData);
  };
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
      <div className="mt-6">
        <button
          className="bg-green-600 text-white font-semibold px-6 py-2 rounded shadow-md hover:bg-gray-700 focus:outline-none"
          onClick={handleSaveChanges}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default NeedsEditForm;
