import React, { useState } from "react";

const DescriptionForm = ({ description, setDescription }) => {
  return (
    <div className="space-y-4">
      <label className="block text-gray-700 font-bold text-lg">
        Describe yourself in one line (optional)
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="textarea"
        placeholder="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
    </div>
  );
};

export default DescriptionForm;
