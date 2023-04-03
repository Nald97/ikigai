import React, { useState, useEffect } from "react";
import MultiSelectButtonGroup from "./MultiSelectButtonGroup";

// The RenderSection component is a reusable component that renders a section
// with a title, a group of buttons for multi-selection, and an input field for
// adding custom options.

const RenderSection = ({ title, options, selected, onSelect }) => {
  const [customOption, setCustomOption] = useState("");
  const [allOptions, setAllOptions] = useState(options);

  const handleCustomOptionChange = (event) => {
    setCustomOption(event.target.value);
  };

  const addCustomOption = () => {
    if (customOption.trim() !== "") {
      onSelect([...selected, customOption]);
      setAllOptions([...allOptions, customOption]);
      setCustomOption("");
    }
  };

  return (
    <div className="my-6">
      <h2 className="mb-4 text-xl font-bold text-black-700">{title}</h2>
      <MultiSelectButtonGroup
        options={allOptions}
        selected={selected}
        onSelect={onSelect}
      />
      <input
        value={customOption}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4"
        type="text"
        placeholder="Add your own"
        list={`${title}-datalist`}
        onChange={handleCustomOptionChange}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
        onClick={addCustomOption}
      >
        Add
      </button>
      <datalist id={`${title}-datalist`}>
        {options?.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </datalist>
    </div>
  );
};

export default RenderSection;
