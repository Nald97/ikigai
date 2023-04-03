import React, { useState, useEffect } from "react";
import RenderSection from "../../common/RenderSection";
import { editProfile, updateSelectedCounts } from "../../../api/FirestoreAPI";

// The CompetencesEditForm component is used to manage and edit the user's skills,
// knowledge, and expertise within their ikigai.
const CompetencesEditForm = ({ ikigaiElements, userIkigai, userId }) => {
  // Initialize state variables for selected top skills, knowledge, and expertise.
  const [selectedTopSkills, setSelectedTopSkills] = useState([]);
  const [selectedKnowledge, setSelectedKnowledge] = useState([]);
  const [selectedExpertise, setSelectedExpertise] = useState([]);
  const [previousSelections, setPreviousSelections] = useState({
    skills: [],
    knowledge: [],
    expertise: [],
  });

  // useEffect is called when the userIkigai prop changes, updating the state variables
  // with the user's existing skills, knowledge, and expertise.
  useEffect(() => {
    if (userIkigai) {
      setSelectedTopSkills(userIkigai.what_are_you_good_at?.skills || []);
      setSelectedKnowledge(userIkigai.what_are_you_good_at?.knowledge || []);
      setSelectedExpertise(userIkigai.what_are_you_good_at?.expertise || []);
      setPreviousSelections({
        skills: userIkigai.what_are_you_good_at?.skills || [],
        knowledge: userIkigai.what_are_you_good_at?.knowledge || [],
        expertise: userIkigai.what_are_you_good_at?.expertise || [],
      });
    }
  }, [
    userIkigai,
    setSelectedTopSkills,
    setSelectedKnowledge,
    setSelectedExpertise,
    setPreviousSelections,
  ]);

  // handleSaveChanges is called when the user clicks the "Save Changes" button,
  // updating the user's ikigai with the new selections and invoking the editProfile
  // API call to save the changes.
  const handleSaveChanges = async () => {
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

    const newSelections = {
      skills: selectedTopSkills,
      knowledge: selectedKnowledge,
      expertise: selectedExpertise,
    };

    await updateSelectedCounts(newSelections, previousSelections);

    editProfile(userId, updatedData);
  };

  // The component renders a form with sections for selecting top skills, knowledge,
  // and expertise. Each section uses the RenderSection component for display.
  // After making selections, the user can click the "Save Changes" button to save.
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
          className="bg-green-600 text-white font-semibold px-6 py-2 rounded shadow-md hover:bg-blue-500 focus:outline-none"
          onClick={handleSaveChanges}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default CompetencesEditForm;
