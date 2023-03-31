import React, { useState, useEffect } from "react";
import MultiSelectButtonGroup from "./MultiSelectButtonGroup";

const RenderSection = ({ title, options, selected, onSelect }) => {
  const [customOption, setCustomOption] = useState("");

  const handleCustomOptionChange = (event) => {
    setCustomOption(event.target.value);
    onSelect([...selected, event.target.value]);
  };

  return (
    <div className="my-6">
      <h2 className="mb-4 text-xl font-bold text-black-700">{title}</h2>
      <MultiSelectButtonGroup
        options={options}
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
      <datalist id={`${title}-datalist`}>
        {options?.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </datalist>
    </div>
  );
};

export default RenderSection;
