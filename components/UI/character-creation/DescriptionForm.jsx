import React, { useState } from "react";

const DescriptionForm = ({ onSave, userIkigai }) => {
  const [description, setDescription] = useState(userIkigai?.description || "");

  const handleSave = () => {
    onSave({
      description: description,
    });
  };

  return (
    <div className="space-y-4">
      <label className="block text-gray-700 font-bold text-lg">
        Describe yourself in one line (optional)
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Description"
        value={userIkigai?.description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <div className="mt-6">
        <button
          className="bg-gray-800 text-white font-semibold px-6 py-2 rounded shadow-md hover:bg-gray-700 focus:outline-none"
          onClick={handleSave}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default DescriptionForm;
