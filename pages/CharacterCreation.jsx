import React, { useState, useEffect, useMemo } from "react";
import MultiSelectButtonGroup from "../components/common/MultiselectButtonGroup";
import { getIkigaiElements } from "../api/FirestoreAPI";

const CharacterCreation = () => {
  const [step, setStep] = useState(1);
  const [avatar, setAvatar] = useState("");
  const [socialLinks, setSocialLinks] = useState({
    twitter: "",
    linkedin: "",
    github: "",
  });
  const [description, setDescription] = useState("");
  const [interests, setInterests] = useState();
  const [topSkills, setTopSkills] = useState();
  const [hobbies, setHobbies] = useState();
  const [values, setValues] = useState();
  const [knowledge, setKnowledge] = useState();
  const [expertise, setExpertise] = useState();
  const [worldNeeds, setWorldNeeds] = useState();
  const [communityNeeds, setCommunityNeeds] = useState();
  const [personalNeeds, setPersonalNeeds] = useState();

  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedTopSkills, setSelectedTopSkills] = useState([]);
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const [selectedValues, setSelectedValues] = useState([]);
  const [selectedKnowledge, setSelectedKnowledge] = useState([]);
  const [selectedExpertise, setSelectedExpertise] = useState([]);
  const [selectedWorldNeeds, setSelectedWorldNeeds] = useState([]);
  const [selectedCommunityNeeds, setSelectedCommunityNeeds] = useState([]);
  const [selectedPersonalNeeds, setSelectedPersonalNeeds] = useState([]);

  useEffect(() => {
    async function fetchIkigaiElements() {
      const ikigaiElements = await getIkigaiElements();

      setInterests(ikigaiElements.interests);
      setTopSkills(ikigaiElements.skills);
      setHobbies(ikigaiElements.hobbies);
      setValues(ikigaiElements.values);
      setKnowledge(ikigaiElements.knowledge);
      setExpertise(ikigaiElements.expertise);
      setWorldNeeds(ikigaiElements.world);
      setCommunityNeeds(ikigaiElements.community);
      setPersonalNeeds(ikigaiElements.you);
    }

    fetchIkigaiElements();
  }, []);

  const handleNext = () => {
    if (step < 6) {
      setStep(step + 1);
    } else {
      // Submit the character creation data and redirect to the next page
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="flex flex-col items-center">
            <label className="block text-gray-700 font-bold mb-2">
              Upload your avatar (optional)
            </label>
            <input
              className="border border-gray-400 p-2 mb-4"
              type="file"
              accept="image/*"
              onChange={(event) => setAvatar(event.target.files[0])}
            />
            {avatar && (
              <img
                className="w-32 h-32 object-cover mb-4"
                src={URL.createObjectURL(avatar)}
                alt="Preview"
              />
            )}
          </div>
        );
      case 2:
        return (
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Social Links (optional)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
              type="text"
              placeholder="Twitter"
              value={socialLinks.twitter}
              onChange={(event) =>
                setSocialLinks({ ...socialLinks, twitter: event.target.value })
              }
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
              type="text"
              placeholder="LinkedIn"
              value={socialLinks.linkedin}
              onChange={(event) =>
                setSocialLinks({ ...socialLinks, linkedin: event.target.value })
              }
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="GitHub"
              value={socialLinks.github}
              onChange={(event) =>
                setSocialLinks({ ...socialLinks, github: event.target.value })
              }
            />
          </div>
        );
      case 3:
        return (
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Describe yourself in one line (optional)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
        );
      case 4:
        return (
          <div>
            <h2 className="mb-4">What are your interests?</h2>
            <MultiSelectButtonGroup
              options={interests}
              selected={selectedInterests}
              onSelect={setSelectedInterests}
            />

            <h2 className="mb-4 mt-6">What are your top skills?</h2>
            <MultiSelectButtonGroup
              options={topSkills}
              selected={selectedTopSkills}
              onSelect={setSelectedTopSkills}
            />

            <h2 className="mb-4 mt-6">What are your hobbies?</h2>
            <MultiSelectButtonGroup
              options={hobbies}
              selected={selectedHobbies}
              onSelect={setSelectedHobbies}
            />

            <h2 className="mb-4 mt-6">What are your values?</h2>
            <MultiSelectButtonGroup
              options={values}
              selected={selectedValues}
              onSelect={setSelectedValues}
            />

            <h2 className="mb-4 mt-6">What do you know?</h2>
            <MultiSelectButtonGroup
              options={knowledge}
              selected={selectedKnowledge}
              onSelect={setSelectedKnowledge}
            />
          </div>
        );
      case 5:
        return (
          <div>
            <h2 className="mb-4">What are your areas of expertise?</h2>
            <MultiSelectButtonGroup
              options={expertise}
              selected={selectedExpertise}
              onSelect={setSelectedExpertise}
            />

            <h2 className="mb-4 mt-6">What does the world need?</h2>
            <MultiSelectButtonGroup
              options={worldNeeds}
              selected={selectedWorldNeeds}
              onSelect={setSelectedWorldNeeds}
            />

            <h2 className="mb-4 mt-6">What does your community need?</h2>
            <MultiSelectButtonGroup
              options={communityNeeds}
              selected={selectedCommunityNeeds}
              onSelect={setSelectedCommunityNeeds}
            />

            <h2 className="mb-4 mt-6">What do you need?</h2>
            <MultiSelectButtonGroup
              options={personalNeeds}
              selected={selectedPersonalNeeds}
              onSelect={setSelectedPersonalNeeds}
            />
          </div>
        );
      default:
        return null;
    }
  };

  console.log(interests, topSkills, hobbies, values, knowledge);

  return (
    <div>
      <h1>Character Creation - Step {step}</h1>
      {renderStep()}
      <button onClick={handleBack} disabled={step === 1}>
        Back
      </button>
      <button onClick={handleNext}>{step === 5 ? "Submit" : "Next"}</button>
    </div>
  );
};

export default CharacterCreation;
