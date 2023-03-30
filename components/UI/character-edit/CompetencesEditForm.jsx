// CompetencesEditForm.js
import React, { useState, useEffect } from "react";
import RenderSection from "../../common/RenderSection";
import { editProfile } from "../../../api/FirestoreAPI";

const CompetencesEditForm = ({ ikigaiElements, userIkigai, userId }) => {
  const [selectedTopSkills, setSelectedTopSkills] = useState([]);
  const [selectedKnowledge, setSelectedKnowledge] = useState([]);
  const [selectedExpertise, setSelectedExpertise] = useState([]);

  useEffect(() => {
    if (userIkigai) {
      setSelectedTopSkills(userIkigai.what_are_you_good_at?.skills || []);
      setSelectedKnowledge(userIkigai.what_are_you_good_at?.knowledge || []);
      setSelectedExpertise(userIkigai.what_are_you_good_at?.expertise || []);
    }
  }, [
    userIkigai,
    setSelectedTopSkills,
    setSelectedKnowledge,
    setSelectedExpertise,
  ]);

  const handleSaveChanges = () => {
    const updatedData = {
      ikigai: {
        ...userIkigai,
        what_are_you_good_at: {
          skills: selectedTopSkills,
          knowledge: selectedKnowledge,
          expertise: selectedExpertise,
        },
      },
    };

    editProfile(userId, updatedData);
  };

  return (
    <div>
      <RenderSection
        title="What are your top skills?"
        options={ikigaiElements?.skills}
        selected={selectedTopSkills}
        onSelect={setSelectedTopSkills}
      />
      <RenderSection
        title="What knowledge do you have?"
        options={ikigaiElements?.knowledge}
        selected={selectedKnowledge}
        onSelect={setSelectedKnowledge}
      />
      <RenderSection
        title="What are your areas of expertise?"
        options={ikigaiElements?.expertise}
        selected={selectedExpertise}
        onSelect={setSelectedExpertise}
      />
      <div className="mt-6">
        <button
          className="bg-gray-800 text-white font-semibold px-6 py-2 rounded shadow-md hover:bg-gray-700 focus:outline-none"
          onClick={handleSaveChanges}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default CompetencesEditForm;
