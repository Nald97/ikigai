// Import React library for creating user interfaces
import React from "react";

// Define a functional component called MultiSelectButtonGroup
// It takes three props: options (the available options to select), selected (the currently selected options), and onSelect (a function to handle selection changes)
const MultiSelectButtonGroup = ({ options, selected, onSelect }) => {
  // Define a function called toggleSelection that takes an option as its argument
  // The function checks if the option is already in the selected list, and if so, removes it; otherwise, it adds the option to the list
  const toggleSelection = (option) => {
    if (selected.includes(option)) {
      onSelect(selected.filter((item) => item !== option));
    } else {
      onSelect([...selected, option]);
    }
  };

  // Render a div containing a series of buttons created from the options prop
  // Each button has a unique key, conditional styling based on whether it's selected or not, and an onClick handler that calls the toggleSelection function with the option
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
