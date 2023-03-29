import React, { useState, useEffect } from "react";
import RenderSection from "../../common/RenderSection";
import { getIkigaiElements } from "../../../api/FirestoreAPI";

const PreferencesForm = ({
  interests,
  hobbies,
  values,
  selectedInterests,
  selectedHobbies,
  selectedValues,
  setSelectedInterests,
  setSelectedHobbies,
  setSelectedValues,
}) => {
  return (
    <div>
      <RenderSection
        title="What are your interests?"
        options={interests}
        selected={selectedInterests}
        onSelect={setSelectedInterests}
      />
      <RenderSection
        title="What are your hobbies?"
        options={hobbies}
        selected={selectedHobbies}
        onSelect={setSelectedHobbies}
      />
      <RenderSection
        title="What are your values?"
        options={values}
        selected={selectedValues}
        onSelect={setSelectedValues}
      />
    </div>
  );
};

export default PreferencesForm;
