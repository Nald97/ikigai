// Import React library for creating user interfaces
import React from "react";

const MultiSelectButtonGroup = ({ options, selected, onSelect }) => {
  const toggleSelection = (option) => {
    if (selected.includes(option)) {
      onSelect(selected.filter((item) => item !== option));
    } else {
      onSelect([...selected, option]);
    }
  };

  
  return (
    <div className="flex flex-wrap">
      {options?.map((option) => (
        <button
          key={option}
          className={`m-1 py-2 px-4 border border-gray-300 rounded ${
            selected.includes(option)
              ? "bg-blue-600 text-white font-semibold"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => toggleSelection(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default MultiSelectButtonGroup;
